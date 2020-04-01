import React from 'react';
import {countriesData} from "../data/countriesData";
import {DropdownButton, Dropdown} from "react-bootstrap";

const Header = (props) => {
    const {country, setCountry} = props;

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
                            onClick={() => setCountry(key)}
                            key={key}>{countriesData[key]}
                        </Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    )
};

export default Header;