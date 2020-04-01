import React, {useEffect, useState} from 'react';
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
    const [status, setStatus] = useState("loading");

    const setCountryHandle = (country) => {
        localStorage.setItem("country", country);
        setCountry(country);
        setStatus("loading");
    };

    useEffect(() => {

    }, [country]);

    return (
        <div className="container text-center">
            <Header
                country={country}
                setCountry={setCountryHandle}
            />
            <Tracker
                country={country}
                status={status}

                setStatus={(val) => setStatus(val)}
            />
            <Footer/>
        </div>

    );
};

export default App;
