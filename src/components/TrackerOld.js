import React, {useEffect, useMemo, useState, useContext} from 'react';
import axios from 'axios';
import {Alert} from "react-bootstrap";
import {AppContext} from "../contexts/AppContext";
import ApexChart from "./ApexChart";

const TrackerOld = () => {
    const {country, status, setStatus} = props;

    const [componentState, setComponentState] = useState(
        {
            countryData: {},
            chartData: {},
        }
    );


    useEffect(() => {
        axios.get(`https://api.thevirustracker.com/free-api?countryTotal=${country.toUpperCase()}`)
            .then(res1 => {
                axios.get(`https://api.thevirustracker.com/free-api?countryTimeline=${country.toUpperCase()}`)
                    .then(res2 => {
                        const todayData = res1.data;
                        const chartData = res2.data;

                        const countryInfo = chartData["countrytimelinedata"][0]["info"];
                        const timelineItems = chartData["timelineitems"][0];

                        let timelineItemsFormated = {};

                        //Format date from "3/31/20" to "03-30". Note the substracting of 1 day due to incorrect api data.
                        Object.keys(timelineItems).forEach(date => {
                            const item = timelineItems[date];
                            if (date !== "stat") {
                                const dateFormated = new Date(Date.parse(date)).toISOString().slice(5, 10);
                                timelineItemsFormated[dateFormated] = item
                            }
                        });

                        //Today - new today = total for yesterday
                        console.log(todayData["countrydata"][0]);

                        setComponentState({
                            ...componentState,
                            countryData: todayData["countrydata"][0],
                            chartData: {
                                country: countryInfo.title,
                                countryCode: countryInfo.code,
                                timeline: timelineItemsFormated,
                            },
                        });
                        setStatus("completed");
                    })
            })
            .catch(e => setStatus("error"));


    }, [status]);

    useEffect(()=>{

    })


    const {
        total_cases,
        total_recovered,
        // total_unresolved,
        total_deaths,
        total_new_cases_today,
        total_new_deaths_today,
        total_active_cases,
        // total_serius_cases,
    } = componentState.countryData;

    let deathPerc = ((total_deaths / total_cases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((total_recovered / total_cases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    let newPerc = ((total_new_cases_today / total_cases) * 100).toFixed(2);
    newPerc = isFinite(newPerc) ? newPerc : 0;

    const countryHasData =
        (!(Object.keys(componentState.countryData).length === 0 && Object.keys(componentState.chartData).length === 0));

    return useMemo(() => {
        // console.log(componentState);

        if (status === "loading") {
            return (<h4>Зареждане...</h4>);
        } else if (status === "completed") {
            if (!countryHasData) {
                return <h4>Няма данни</h4>
            }

            return (
                <div>
                    <Alert variant="secondary">
                        <Alert.Heading>Общ брой случаи: {total_cases}</Alert.Heading>
                    </Alert>
                    <Alert variant="danger">
                        <Alert.Heading>Смъртни случаи: {total_deaths} ({deathPerc}%)</Alert.Heading>
                    </Alert>
                    <Alert variant="success">
                        <Alert.Heading>Излекувани: {total_recovered} ({recPerc}%)</Alert.Heading>
                    </Alert>
                    <Alert variant="primary">
                        <Alert.Heading>Активни случаи: {total_active_cases}</Alert.Heading>
                    </Alert>
                    <Alert variant="danger">
                        <Alert.Heading>Нови случаи (днес): {total_new_cases_today} (+{newPerc}%)</Alert.Heading>
                    </Alert>
                    <Alert variant="danger">
                        <Alert.Heading>Смъртни случаи (днес): {total_new_deaths_today}</Alert.Heading>
                    </Alert>
                    {
                        props.country === "GLOBAL"
                            ?
                            <h4>
                                <a href="https://www.worldometers.info/coronavirus/" target="_blank">
                                    За таблица виж тук: www.worldometers.info/coronavirus/
                                </a>
                            </h4>
                            :
                            <ApexChart chartData={componentState.chartData}/>
                    }
                </div>
            );
        } else {
            return (<h4>Грешка при зареждането, моля опитайте по-късно.</h4>)
        }
    }, [status])
};

export default TrackerOld;