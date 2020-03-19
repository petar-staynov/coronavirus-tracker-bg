import React from 'react';
import {countriesData} from "../data/countriesData";
import {DropdownButton, Dropdown} from "react-bootstrap";

const Header = (props) => {
    const {country, setCountry} = props;

    return (
        <div style={{marginBottom: "8px"}}>
            <h1>COVID-19/2019-nCoV/Coronavirus <br/></h1>
            <h4>{new Date().toLocaleDateString(country)}</h4>

            <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                size="lg"
                title={countriesData[country]}>
                {Object.keys(countriesData).map(key => {
                    return (
                        <Dropdown.Item
                            onClick={() => setCountry(key)}
                            key={key}>{countriesData[key]}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    )
};

export default Header;