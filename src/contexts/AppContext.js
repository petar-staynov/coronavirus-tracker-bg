import React, {useState, createContext} from 'react';
import {mockBgTotalData} from '../data/mockBgTotalData'
import {mockBgTimelineData} from "../data/mockBgTimelineData";

export const AppContext = createContext();

export const CountryDataProvider = (props) => {
    const [countryData, setCountryData] = useState(mockBgTotalData);
    const [timelineData, setTimelineData] = useState(mockBgTimelineData);

    const [country, setCountry] = useState(localStorage.getItem("country"));
    const [status, setStatus] = useState("loading");

    return (
        <AppContext.Provider value={[
            countryData,
            setCountryData,
            timelineData,
            setTimelineData,
            country,
            setCountry,
            status,
            setStatus,
        ]}>{props.children}
        </AppContext.Provider>
    )
}