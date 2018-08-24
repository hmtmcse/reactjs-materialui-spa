import React, {Component} from 'react';
import {
    Checkbox
} from '@material-ui/core';
import {showLoader} from './common-helper'
import AppSnackBar from './app-snack-bar'


export default class AppComponent extends Component {

    showProgressbar = () => {this.setState({isSystemProgressBarEnabled: true})};

    hideProgressbar = () => {this.setState({isSystemProgressBarEnabled: false})};

    closeSnackBar = () => {
        this.setState({ showSystemSnackBar: false });
    };

    showSuccessInfo = (message) =>{
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "success",
            systemSnackBarMessage: message
        });
    };

    showErrorInfo= (message) =>{
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "error",
            systemSnackBarMessage: message
        });
    };

    handleChange = () => event => {
        this.setState({isSystemProgressBarEnabled: event.target.checked});
        this.setState({showSystemSnackBar: event.target.checked});
    };

    constructor(props) {
        super(props);
        this.state = {
            isSystemProgressBarEnabled: false,
            showSystemSnackBar: false,
            systemSnackBarVariant: "success",
            systemSnackBarMessage: "Empty Message",
        };
    }

    postToApi(){}

    deleteToApi(){}

    getToApi(){}

    getList(){}

    getBy(){}

    postBy(){}

    postList(){}

    appRender() {
        return (
            <h1>AppComponent</h1>
        );
    }




    render() {
        return (
            <React.Fragment>
                {showLoader(this.state.isSystemProgressBarEnabled)}
                <AppSnackBar variant={this.state.systemSnackBarVariant} isOpen={this.state.showSystemSnackBar} message={this.state.systemSnackBarMessage} onClose={this.closeSnackBar}/>
                {this.appRender()}
            </React.Fragment>
        )
    }
}
