import React, {useContext, useEffect} from 'react';
import TrackerDropdown from "./TrackerDropdown";
import Tracker from "./Tracker";
import {AppContext} from "../contexts/AppContext";
import LoadingStatus from "../common/LoadingStatus";
import {CountriesList} from "../data/CountriesList";
import TrackerGlobal from "./TrackerGlobal";

const TrackerContainer = (props) => {
    const {
        status,
        setStatus,
        country,
        countryData,
        setCountryData
    } = useContext(AppContext);

    // FETCH DATA
    useEffect(() => {
        const countryInfo = CountriesList[country];
        const countrySlug = countryInfo["Slug"];

        if (country === "GLOBAL") {
            fetch(`https://api.covid19api.com/summary`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`${res.json()}`)
                    }
                    return res.json();
                })
                .then(json => {
                    setCountryData(json);
                    setStatus(LoadingStatus.Loaded);
                }).catch(err => {
                console.log(err)
                setStatus(LoadingStatus.Error);
            })
        } else {
            fetch(`https://api.covid19api.com/country/${countrySlug}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`${res.json()}`)
                    }
                    return res.json();
                })
                .then(json => {
                    setCountryData(json);
                    setStatus(LoadingStatus.Loaded);
                }).catch(err => {
                console.log(err)
                setStatus(LoadingStatus.Error);
            })
        }
    }, [country]);

    return (
        <>
            <TrackerDropdown/>
            <br/>
            {
                status === LoadingStatus.Loading ? <h3>Loading...</h3> : null
            }
            {
                status === LoadingStatus.Loaded
                    ? country === "GLOBAL"
                    ? <TrackerGlobal data={countryData}/>
                    : <Tracker data={countryData}/>
                    : null
            }
            {
                status === LoadingStatus.Error ? <h3>Error loading data!</h3> : null
            }
        </>
    )
};

export default TrackerContainer;