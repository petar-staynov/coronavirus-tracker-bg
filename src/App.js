import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Tracker from "./components/Tracker";

const App = () => {
    if (!localStorage.getItem("country")) {
        localStorage.setItem("country", "BG")
    }

    const [country, setCountry] = useState(localStorage.getItem("country"));

    const setCountryHandle = (country) => {
        localStorage.setItem("country", country);
        // console.log('Update App Country');
        setCountry(country);
    };

    return (
        <div className="container text-center">
            <Header country={country} setCountry={setCountryHandle}/>
            <Tracker country={country} setCountry={setCountryHandle}/>
            <Footer/>
        </div>
    );
};

export default App;
