import React from 'react';
import {Alert} from "react-bootstrap";
import ChartsContainer from "./ChartsContainer";

const Tracker = ({data}) => {
    const dataLength = data.length;
    console.log(dataLength);

    console.log(data)


    /*
    DATA FORMAT:

    Active: 0
    City: ""
    CityCode: ""
    Confirmed: 0
    Country: "Bulgaria"
    CountryCode: "BG"
    Date: "2020-01-22T00:00:00Z"
    Deaths: 0
    Lat: "42.73"
    Lon: "25.49"
    Province: ""
    Recovered: 0
    */

    //Get  
    let activeCases = data[data.length - 1]["Active"];
    let recoveredCases = data[data.length - 1]["Recovered"];
    let deceasedCases = data[data.length - 1]["Deaths"];
    let totalCases = data[data.length - 1]["Confirmed"];


    // Fetch total cases


    let deathPerc = ((deceasedCases / totalCases) * 100).toFixed(2);
    deathPerc = isFinite(deathPerc) ? deathPerc : 0;

    let recPerc = ((recoveredCases / totalCases) * 100).toFixed(2);
    recPerc = isFinite(recPerc) ? recPerc : 0;

    // let newPerc = ((total_new_cases_today / totalCases) * 100).toFixed(2);
    // newPerc = isFinite(newPerc) ? newPerc : 0;


    return (
        <div>
            <Alert variant="secondary">
                <Alert.Heading>Общ брой случаи: {totalCases}</Alert.Heading>
            </Alert>
            <Alert variant="danger">
                <Alert.Heading>Починали: {deceasedCases} ({deathPerc}%)</Alert.Heading>
            </Alert>
            <Alert variant="success">
                <Alert.Heading>Излекувани: {recoveredCases} ({recPerc}%)</Alert.Heading>
            </Alert>
            <hr/>
            <Alert variant="primary">
                <Alert.Heading>Активни случаи: {activeCases}</Alert.Heading>
            </Alert>
            <Alert variant="danger">
                <Alert.Heading>Нови случаи (днес): {0} (+{0}%)</Alert.Heading>
            </Alert>
            <Alert variant="danger">
                <Alert.Heading>Смъртни случаи (днес): {0}</Alert.Heading>
            </Alert>
            {
                true
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
};

export default Tracker;