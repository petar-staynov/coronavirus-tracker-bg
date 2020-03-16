import React, {Component} from 'react';
import {Alert, Container} from 'react-bootstrap';

class BgTracker extends Component {
    fetchUrl = "https://thevirustracker.com/free-api?countryTotal=BG";

    state = {
        isLoading: true,
        countrydata: {},
        countrynewsitems: {},
    };

    componentDidMount() {
        fetch(this.fetchUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({countrydata: json.countrydata[0]});
                this.setState({countrynewsitems: json.countrynewsitems[0]});
                this.setState({isLoading: false});
            }).then(() => {
            console.log(this.state);
        });
    }

    resultsElement = () => {
        const {
            total_cases,
            total_recovered,
            total_unresolved,
            total_deaths,
            total_new_cases_today,
            total_new_deaths_today,
            total_active_cases,
            total_serius_cases,
        } = this.state.countrydata;

        let deathPerc = ((total_deaths / total_cases) * 100).toFixed(2);
        deathPerc = isFinite(deathPerc) ? deathPerc : 0;

        let recPerc = ((total_recovered / total_cases) * 100).toFixed(2);
        recPerc = isFinite(recPerc) ? recPerc : 0;

        let newPerc = ((total_new_cases_today / total_cases) * 100).toFixed(2);
        newPerc = isFinite(newPerc) ? newPerc : 0;

        return (
            <div style={{textAlign: 'center'}}>

                <h4>{new Date().toLocaleDateString("bg")}</h4>

                <Alert variant="secondary">
                    <Alert.Heading>Общ брой случаи: {total_cases}</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Смъртни случаи: {total_deaths} ({deathPerc}%)</Alert.Heading>
                </Alert>
                <Alert variant="success">
                    <Alert.Heading>Излекувани: {total_recovered} ({recPerc}%)</Alert.Heading>
                </Alert>
                <Alert variant="primary">
                    <Alert.Heading>Активни случаи: {total_active_cases}</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Нови случаи (днес): {total_new_cases_today} (+{newPerc}%)</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Смъртни случаи (днес): {total_new_deaths_today}</Alert.Heading>
                </Alert>
            </div>
        )
    };

    render() {
        return (
            this.state.isLoading
                ? <h4>Loading...</h4>
                : this.resultsElement()
        );
    }
}

export default BgTracker;