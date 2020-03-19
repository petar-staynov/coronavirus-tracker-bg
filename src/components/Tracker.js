import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";

const Tracker = (props) => {
    const {country} = props;

    let fetchUrl;
    country === "GLOBAL"
        ? fetchUrl = 'https://thevirustracker.com/free-api?global=stats'
        : fetchUrl = `https://thevirustracker.com/free-api?countryTotal=${country.toUpperCase()}`;


    const [loadStatus, setLoadStatus] = useState("loading");


    const [countrydata, setCountrydata] = useState({});
    // const [countrynewsitems, setCountrynewsitems] = useState({});

    useEffect(() => {
        if (country === "GLOBAL") {
            fetch(fetchUrl)
                .then(res => res.json())
                .then(json => {
                    setCountrydata(json.results[0]);
                    // setCountrynewsitems(null);
                    setLoadStatus("completed");
                });
            return;
        }

        fetch(fetchUrl,)
            .then(res => res.json())
            .then(json => {
                setCountrydata(json.countrydata[0]);
                // setCountrynewsitems(json.countrynewsitems[0]);
                setLoadStatus("completed");
            })
            .catch(e => setLoadStatus("error"));

    }, [country, fetchUrl]);


    const {
        total_cases,
        total_recovered,
        // total_unresolved,
        total_deaths,
        total_new_cases_today,
        total_new_deaths_today,
        total_active_cases,
        // total_serius_cases,
    } = countrydata;

    let deathPerc = ((total_deaths / total_cases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((total_recovered / total_cases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    let newPerc = ((total_new_cases_today / total_cases) * 100).toFixed(2);
    newPerc = isFinite(newPerc) ? newPerc : 0;

    let resultElement = <h4>Зареждане...</h4>
    if (loadStatus === "completed") {
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
            </div>
        );
    } else if (loadStatus === "error") {
        resultElement = (<h4>Грешка при зареждането, моля опитайте по-късно.</h4>)
    }

    return resultElement

};

export default Tracker;