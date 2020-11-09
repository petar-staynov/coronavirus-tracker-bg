import React from 'react';
import {Alert} from "react-bootstrap";
import {numberWithSpaces} from "../utils/NumberFormatUtils";

const TrackerGlobal = ({data}) => {
    const globalData = data["Global"];
    console.log(globalData);

    const recoveredCases = globalData["TotalRecovered"]
    const deceasedCases = globalData["TotalDeaths"]
    const totalCases = globalData["TotalConfirmed"];
    const newCasesToday = globalData["NewConfirmed"];
    const deathsToday = globalData["NewDeaths"];
    const recoveredToday = globalData["NewRecovered"];

    const activeCases = totalCases - recoveredCases - deceasedCases;
    const closedCases = recoveredCases + deceasedCases;

    let deathPerc = ((deceasedCases / closedCases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((recoveredCases / closedCases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;


    return (
        <>
            <Alert variant="secondary">
                <Alert.Heading>Общ брой случаи: {numberWithSpaces(totalCases)}</Alert.Heading>
            </Alert>
            <Alert variant="primary">
                <Alert.Heading>Активни случаи: {numberWithSpaces(activeCases)}</Alert.Heading>
            </Alert>
            <Alert variant="danger">
                <Alert.Heading>Починали: {numberWithSpaces(deceasedCases)} ({deathPerc}%)</Alert.Heading>
            </Alert>
            <Alert variant="success">
                <Alert.Heading>Излекувани: {numberWithSpaces(recoveredCases)} ({recPerc}%)</Alert.Heading>
            </Alert>
            <hr/>
            <h2>Информация за днес:</h2>
            <Alert variant="warning">
                <Alert.Heading>Нови случаи днес: {numberWithSpaces(newCasesToday)}</Alert.Heading>
            </Alert>
            <Alert variant="success">
                <Alert.Heading>Излекувани днес: {numberWithSpaces(recoveredToday)}</Alert.Heading>
            </Alert>
            <Alert variant="danger">
                <Alert.Heading>Починали днес: {numberWithSpaces(deathsToday)}</Alert.Heading>
            </Alert>
        </>
    )
};

export default TrackerGlobal;