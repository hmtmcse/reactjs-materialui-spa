import React, { Component } from 'react';
import {
    Fade, LinearProgress, Checkbox
} from '@material-ui/core';

export default class AppComponent extends Component {

    state = {
        checkedA: true,
        checkedB: true,
        checkedF: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    appRender(){
        return (
            <h1>AppComponent</h1>
        );
    }

    render(){return(
        <React.Fragment>

            {
                this.state.checkedA ? ( <Fade in={this.state.checkedA}>
                    <LinearProgress color="primary" />
                </Fade>) : ""
            }


            <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
            />

            {this.appRender()}
        </React.Fragment>
    ) }
}
