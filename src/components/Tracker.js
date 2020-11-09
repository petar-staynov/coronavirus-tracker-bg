import React, {useContext} from 'react';
import {Alert} from "react-bootstrap";
import ChartsContainer from "./ChartsContainer";
import {AppContext} from "../contexts/AppContext";
import TrackerGlobal from "./TrackerGlobal";
import {numberWithSpaces} from "../utils/NumberFormatUtils";

const Tracker = ({data}) => {
    // Calculate data for the main display
    const activeCases = data[data.length - 1]["Active"];
    const recoveredCases = data[data.length - 1]["Recovered"];
    const deceasedCases = data[data.length - 1]["Deaths"];
    const totalCases = data[data.length - 1]["Confirmed"];

    const closedCases = recoveredCases + deceasedCases;

    let deathPerc = ((deceasedCases / closedCases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((recoveredCases / closedCases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    // Calculate data for the charts
    const daysToShow = 20;
    const daysToSkip = data.length % daysToShow - 1;

    const dates = [];
    const totalCasesStats = [];
    const activeCasesStats = [];
    const newCasesStats = [];

    for (let dayIndx = daysToSkip; dayIndx < data.length; dayIndx += daysToShow) {
        const day = data[dayIndx];

        // Format date
        dates.push(new Date(day["Date"]).toLocaleDateString())

        // Get total cases
        totalCasesStats.push(day["Confirmed"]);

        //Get active cases
        activeCasesStats.push(day["Active"])

        // Calculate the total new cases for the previous few days
        let newCasesTotal = 0;
        for (let prevDayIndx = dayIndx - (daysToSkip - 1); prevDayIndx < dayIndx; prevDayIndx++) {
            const day = data[prevDayIndx];
            const prevDay = data[prevDayIndx - 1];

            const newCases = day["Confirmed"] - prevDay["Confirmed"];
            newCasesTotal += newCases;
        }
        newCasesStats.push(newCasesTotal);
    }

    const chartsData = {
        dates: dates,
        totalCasesStats: totalCasesStats,
        activeCasesStats: activeCasesStats,
        newCasesStats: newCasesStats,
    };

    // Render
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
            <ChartsContainer data={chartsData}/>
        </>
    );
};

export default Tracker;