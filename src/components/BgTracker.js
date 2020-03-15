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


        return (
            <div style={{textAlign: 'center'}}>
                <h1>COVID-19/2019-nCoV/Coronavirus <br/> България</h1>
                <h4>{new Date().toLocaleDateString("bg")}</h4>

                <Alert variant="secondary">
                    <Alert.Heading>Общ брой случаи: {total_cases}</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Смъртни случаи: {total_deaths}</Alert.Heading>
                </Alert>
                <Alert variant="success">
                    <Alert.Heading>Излекувани: {total_recovered}</Alert.Heading>
                </Alert>
                <Alert variant="primary">
                    <Alert.Heading>Активни случаи: {total_active_cases}</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Нови случаи (днес): {total_new_cases_today}</Alert.Heading>
                </Alert>
                <Alert variant="danger">
                    <Alert.Heading>Смъртни случаи (днес): {total_new_deaths_today}</Alert.Heading>
                </Alert>
                <small><a href={"https://thevirustracker.com/api"}>api</a></small>
            </div>
        )
    };

    render() {
        console.log(this.state.countrydata["total_cases"]);
        return (
            <Container>
                {this.state.isLoading
                    ? <h4>Loading...</h4>
                    : this.resultsElement()}
            </Container>
        );
    }
}

export default BgTracker;