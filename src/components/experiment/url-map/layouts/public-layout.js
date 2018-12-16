import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <React.Fragment>
                <h1>Public Layout</h1>
                <Component route={route}/>
            </React.Fragment>
        );
    }
}
