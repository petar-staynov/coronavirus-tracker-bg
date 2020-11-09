import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <hr/>
                <small><a href={"https://covid19api.com/"}>api</a></small>
                <br/>
                <small><a href={"https://github.com/petar-staynov/coronavirus-tracker-bg"}>GitHub</a></small>
                <br/>
                <small><strong>&copy; Petar Staynov 2020-2021 &copy;</strong></small>
            </div>
        );
    }
}

export default Footer;