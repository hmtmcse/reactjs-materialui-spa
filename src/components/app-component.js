import React, { Component } from 'react'

export default class AppComponent extends Component {

    appRender(){
        return (
            <h1>AppComponent</h1>
        );
    }

    render(){return this.appRender()}
}
