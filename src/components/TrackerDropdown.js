import React, {useContext} from 'react';
import {AppContext} from "../contexts/AppContext";
import {CountriesList} from "../data/CountriesList";
import {Dropdown, DropdownButton} from "react-bootstrap";
import LoadingStatus from "../common/LoadingStatus";

const TrackerDropdown = (props) => {
    const {
        status,
        setStatus,
        country,
        setCountry} = useContext(AppContext)

    const handleCountryChange = (countryKey) => {
        setStatus(LoadingStatus.Loading);
        setCountry(countryKey);
    };


    return (
        <DropdownButton
            id="dropdown-basic-button"
            variant="secondary"
            size="lg"
            title={CountriesList[country].Country}
            onSelect={handleCountryChange}>
            {
                Object.entries(CountriesList).map(([countryCode, countryData]) => {
                    return (
                        <Dropdown.Item key={countryCode} eventKey={countryCode}>
                            {countryData.Country}
                        </Dropdown.Item>
                    )
                })}
        </DropdownButton>
    )
};

export default TrackerDropdown;