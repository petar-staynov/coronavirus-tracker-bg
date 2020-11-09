import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import {AppContextProvider} from "./contexts/AppContext";
import TrackerContainer from "./components/TrackerContainer";

const App = () => {
    return (
        <AppContextProvider>
            <div className="container text-center">
                <Header/>
                <TrackerContainer/>
                <Footer/>
            </div>
        </AppContextProvider>
    );
};

export default App;
