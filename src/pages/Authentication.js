import React, { Component } from 'react';

import { userService } from "../service/UserService";
import Button from 'react-bootstrap/Button'

class Authentication extends Component {

    authentication() {
        userService.login("dalvan", "dalvan");
    }

    render() {
        return <>
            <p>Authentication</p>

            <Button
                variant="primary"
                onClick={this.authentication}
            >
                Go
            </Button>
        </>;
    }
};

export default Authentication;