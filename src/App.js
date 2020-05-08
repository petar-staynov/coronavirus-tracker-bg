import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tracker from "./components/Tracker/Tracker";
import {CountryDataProvider} from "./contexts/AppContext";

const App = () => {
    return (
        <CountryDataProvider>
            <div className="container text-center">
                <Header/>
                <Tracker/>
                <Footer/>
            </div>
        </CountryDataProvider>
    );
};

export default App;
