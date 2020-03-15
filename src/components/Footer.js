import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <small><a href={"https://thevirustracker.com/api"}>api</a></small>
                <br/>
                <small><a href={"https://github.com/petar-staynov/coronavirus-tracker-bg"}>GitHub</a></small>
            </div>
        );
    }
}

export default Footer;