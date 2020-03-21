import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert} from "react-bootstrap";
import ApexChart from "./ApexChart";

const Tracker = (props) => {
    // console.log('Tracker render with country ' + props.country);
    const {country} = props;


    const [componentState, setComponentState] = useState(
        {
            countryData: {},
            chartData: {},
            loadStatus: "loading",
        }
    );

    useEffect(() => {
        // console.log("Parse country data for " + country);
        if (country === "GLOBAL") {
            axios.get("https://thevirustracker.com/free-api?global=stats")
                .then(res => {
                    const {data} = res;

                    setComponentState({
                        ...componentState,
                        countryData: data.results[0],
                        loadStatus: "completed"
                    });
                })
                .catch(e => setComponentState({
                    ...componentState, loadStatus: "error"
                }));
            return;
        }


        axios.get(`https://thevirustracker.com/free-api?countryTotal=${country.toUpperCase()}`)
            .then(res1 => {
                axios.get(`https://thevirustracker.com/free-api?countryTimeline=${country.toUpperCase()}`)
                    .then(res2 => {
                        const todayData = res1.data;
                        const chartData = res2.data;

                        const countryInfo = chartData["countrytimelinedata"][0]["info"];
                        const timelineItems = chartData["timelineitems"][0];

                        setComponentState({
                            ...componentState,
                            countryData: todayData["countrydata"][0],
                            chartData: {
                                country: countryInfo.title,
                                countryCode: countryInfo.code,
                                timeline: timelineItems,
                            },
                            loadStatus: "completed",
                        });
                    })
            })
            .catch(e => setComponentState({
                ...componentState, loadStatus: "error"
            }));


    }, [props]);


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

    let resultElement = <h4>Зареждане...</h4>;

    if (componentState.loadStatus === "completed") {
        resultElement = (
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
                        ? (<h4>
                            <a href="https://www.worldometers.info/coronavirus/" target="_blank">
                                За таблица виж тук: www.worldometers.info/coronavirus/</a>
                        </h4>)
                        : <ApexChart chartData={componentState.chartData}/>
                }
            </div>
        );
    } else if (componentState.loadStatus === "error") {
        resultElement = (<h4>Грешка при зареждането, моля опитайте по-късно.</h4>)
    }

//<ApexChart chartData={componentState.chartData}/>
    return (
        <div>
            {resultElement}
        </div>
    )

};

export default Tracker;