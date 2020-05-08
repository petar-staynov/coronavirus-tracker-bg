import React, {useState, useEffect} from 'react';
import axios from "axios";

const GlobalTracker = (props) => {
    const {status, setStatus} = props;

    const [componentState, setComponentState] = useState(
        {
            countryData: {},
            chartData: {},
        }
    );

    useEffect(() => {
        axios.get("https://thevirustracker.com/free-api?global=stats")
            .then(res => {
                const {data} = res;

                setComponentState({
                    ...componentState,
                    countryData: data.results[0],
                });
                setStatus("completed");
            })
            .catch(e => setStatus("error"));
    }, [status]);

    return (
        <div>
            {props}
        </div>
    )
};

export default GlobalTracker;