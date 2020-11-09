import React, {useContext} from 'react';
import {AppContext} from "../contexts/AppContext";

const Header = () => {
    const {country} = useContext(AppContext);

    return (
        <div style={{marginBottom: "8px"}}>
            <h1>Corona Tracker BG</h1>
            <h5>Следи случаите на COVID-19 в реално време по света и у нас</h5>
            <h4>{new Date().toLocaleDateString(country)}</h4>
        </div>
    )
};

export default Header;