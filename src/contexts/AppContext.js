import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const CountryDataProvider = (props) => {
    const [countryData, setCountryData] = useState({});
    const [timelineData, setTimelineData] = useState({});
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
};