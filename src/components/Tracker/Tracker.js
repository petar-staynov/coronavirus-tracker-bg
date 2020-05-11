import React, {useContext, useEffect, useMemo} from 'react';
import {AppContext} from "../../contexts/AppContext";
import {Alert} from "react-bootstrap";
import ChartsContainer from "../ChartsContainer";
import {isError, isLoaded, isLoading} from "../../common/LoadingStatus";

const Tracker = (props) => {
    const [countryData,
        setCountryData,
        timelineData,
        setTimelineData,
        country,
        setCountry,
        status,
        setStatus] = useContext(AppContext);

    useEffect(() => {
        if (status !== "loading") {
            return
        }

        /* **************** SET TODAY DATA **************** */
        if (country === "GLOBAL") {
            /* **************** GLOBAL DATA IS RECEIVED AS STREAM **************** */
            const fetchDataGlobal = async () => {
                const globalDataResult = await fetch(
                    'https://api.thevirustracker.com/free-api?global=stats', {})
                    .then(res => res.body)
                    .then(body => {
                        const reader = body.getReader();
                        return reader
                            .read()
                            .then(({done, value}) => {
                                if (done) {
                                    reader.close();
                                }

                                let str = "";
                                for (let i = 0; i < value.length; i++) {
                                    str += String.fromCharCode(parseInt(value[i]));
                                }
                                return JSON.parse(str);
                            });
                    })
                    .then(json => {
                        return json.results[0];
                    });

                setCountryData(globalDataResult);
                console.log(globalDataResult);
                return true;
            };
            fetchDataGlobal()
                .then(r => {
                    if (r === true) {
                        setStatus(isLoaded);
                    }
                });
        } else {
            const fetchData = async () => {
                const countryDataResult = await fetch(`https://api.thevirustracker.com/free-api?countryTotal=${country}`)
                    .then(res => res.json())
                    .then(json => {
                        return json;
                    })
                    .catch(e => {
                        console.log(e);
                        setStatus(isError);
                        return {};
                    });

                const countryData = countryDataResult["countrydata"][0];
                setCountryData(countryData);

                const timelineItemsResult = await fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${country}`)
                    .then(res => res.json())
                    .then(json => {
                        return json;
                    })
                    .catch(e => {
                        console.log(e);
                        return {};
                    });

                const countryInfo = timelineItemsResult["countrytimelinedata"][0]["info"];
                const timelineItems = timelineItemsResult["timelineitems"][0];

                let timelineItemsFormated = {};

                //Format date from "3/31/20" to "03-30". Note the substracting of 1 day due to incorrect api data.
                Object.keys(timelineItems).forEach(date => {
                    const item = timelineItems[date];
                    if (date !== "stat") {
                        const dateFormatted = new Date(Date.parse(date)).toISOString().slice(5, 10);
                        timelineItemsFormated[dateFormatted] = item
                    }
                });

                //Format data for context items
                const timelineData = {
                    country: countryInfo.title,
                    countryCode: countryInfo.code,
                    timeline: timelineItemsFormated,
                };

                setTimelineData(timelineData);

                return true;
            };
            fetchData()
                .then(r => {
                    if (r === true) {
                        setStatus(isLoaded);
                    }
                });
        }
    }, [status]);


    const {
        total_cases,
        total_recovered,
        total_unresolved,
        total_deaths,
        total_new_cases_today,
        total_new_deaths_today,
        total_active_cases,
        total_serius_cases,
    } = countryData;

    let deathPerc = ((total_deaths / total_cases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((total_recovered / total_cases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    let newPerc = ((total_new_cases_today / total_cases) * 100).toFixed(2);
    newPerc = isFinite(newPerc) ? newPerc : 0;

    const countryHasData =
        (!(Object.keys(countryData).length === 0 && Object.keys(timelineData).length === 0));

    return (useMemo(() => {
        if (status === isLoading) {
            return (<h4>Зареждане...</h4>);
        } else if (status === isLoaded) {
            if (!countryHasData) {
                return <h4>Няма данни</h4>
            }
            return (
                <div>
                    <Alert variant="secondary">
                        <Alert.Heading>Общ брой случаи: {total_cases}</Alert.Heading>
                    </Alert>
                    <Alert variant="danger">
                        <Alert.Heading>Починали: {total_deaths} ({deathPerc}%)</Alert.Heading>
                    </Alert>
                    <Alert variant="success">
                        <Alert.Heading>Излекувани: {total_recovered} ({recPerc}%)</Alert.Heading>
                    </Alert>
                    <hr/>
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
                        country === "GLOBAL"
                            ?
                            <h4>
                                <a href="https://www.worldometers.info/coronavirus/" target="_blank">
                                    За таблица виж тук: www.worldometers.info/coronavirus/
                                </a>
                            </h4>
                            :
                            <ChartsContainer/>
                    }
                </div>
            );
        } else {
            return (<h4>Грешка при зареждането, моля опитайте по-късно.</h4>)
        }
    }, [status]));
};

export default Tracker;