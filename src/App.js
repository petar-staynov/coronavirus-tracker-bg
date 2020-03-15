import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BgTracker from "./components/BgTracker";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";

function App() {
  return (
      <Container>
        <BgTracker/>
        <Footer/>
      </Container>
  );
}

export default App;
