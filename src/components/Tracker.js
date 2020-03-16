import React, {useContext, useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";
import {AppContext} from "../App";

const Tracker = (props) => {
    const {country} = props;
    const fetchUrl = `https://thevirustracker.com/free-api?countryTotal=${country.toUpperCase()}`;

    const [isLoading, setIsLoading] = useState(true);
    const [countrydata, setCountrydata] = useState({});
    const [countrynewsitems, setCountrynewsitems] = useState({});

    useEffect(() => {
        if (country === "GLOBAL") {
            fetch('https://thevirustracker.com/free-api?global=stats')
                .then(res => res.json())
                .then(json => {
                    setCountrydata(json.results[0]);
                    setCountrynewsitems(null);
                    setIsLoading(false);
                });
            return;
        }

        fetch(fetchUrl)
            .then(res => res.json())
            .then(json => {
                setCountrydata(json.countrydata[0]);
                setCountrynewsitems(json.countrynewsitems[0]);
                setIsLoading(false);
            }).then(() => {
            console.log("Data fetched");
        });
    }, [country]);


    const {
        total_cases,
        total_recovered,
        total_unresolved,
        total_deaths,
        total_new_cases_today,
        total_new_deaths_today,
        total_active_cases,
        total_serius_cases,
    } = countrydata;

    let deathPerc = ((total_deaths / total_cases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((total_recovered / total_cases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    let newPerc = ((total_new_cases_today / total_cases) * 100).toFixed(2);
    newPerc = isFinite(newPerc) ? newPerc : 0;

    let resultElement = (
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

    return (
        isLoading
            ? <h4>Loading...</h4>
            : resultElement
    )
};

export default Tracker;