import React, {useState, createContext, useEffect} from 'react';
import LoadingStatus from "../common/LoadingStatus";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem("country")));
    const [status, setStatus] = useState(LoadingStatus.Loading);
    const [countryData, setCountryData] = useState(null);

    // Change country in local storage
    useEffect(() => {
        localStorage.setItem("country", JSON.stringify(country));
    }, [country])

    const values = {
        country: country,
        setCountry: setCountry,
        status: status,
        setStatus: setStatus,
        countryData: countryData,
        setCountryData: setCountryData,
    };

    return (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    )
};