import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class UserCreateUpdateView extends Component {
    render() {
        let id = this.props.route.match.params.id;
        console.log(this.props);
        console.log(id);
        return (<h1>User Create Update View {id}</h1>);
    }
}