import React, {useContext} from 'react';
import {countriesData} from "../../data/countriesData";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {AppContext} from "../../contexts/AppContext";

const Header = () => {
    const [countryData,
        setCountryData,
        timelineData,
        setTimelineData,
        country,
        setCountry,
        status,
        setStatus] = useContext(AppContext);

    const handleDropdownItemClick = (countryKey) => {
        localStorage.setItem("country", countryKey);
        setCountry(countryKey);
        setStatus("loading");
    }

    return (
        <div style={{marginBottom: "8px"}}>
            <h1>Corona Tracker BG</h1>
            <h5>Следи случаите на COVID-19 в реално време по света и у нас</h5>
            <h4>{new Date().toLocaleDateString(country)}</h4>
            <hr/>
            <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                size="lg"
                title={countriesData[country]}>
                {Object.keys(countriesData).map(key => {
                    return (
                        <Dropdown.Item
                            onClick={() => handleDropdownItemClick(key)}
                            key={key}>{countriesData[key]}
                        </Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    )
};

export default Header;