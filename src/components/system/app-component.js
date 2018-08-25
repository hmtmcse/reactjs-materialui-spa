import React, {Component} from 'react';
import {showLoader} from './common-helper';
import AppSnackBar from './app-snack-bar';
import {API_BASE_URL} from './app-constant';
import axios from 'axios';


export default class AppComponent extends Component {

    showProgressbar = () => {
        this.setState({isSystemProgressBarEnabled: true})
    };

    hideProgressbar = () => {
        this.setState({isSystemProgressBarEnabled: false})
    };

    closeSnackBar = () => {
        this.setState({showSystemSnackBar: false});
    };

    showSuccessInfo = (message) => {
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "success",
            systemSnackBarMessage: message
        });
    };

    showErrorInfo = (message) => {
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "error",
            systemSnackBarMessage: message
        });
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

    postToApi(url, data, success) {
        this.showProgressbar();
        axios({
            method: 'post',
            url: API_BASE_URL + url,
            data: data
        }).then((response) => {
            success(response);
        }).catch((error) => {
            this.showErrorInfo(error.message);
        }).then(() => {
            this.hideProgressbar();
        });
    }

    deleteToApi() {
    }

    getToApi(url, success) {
        this.showProgressbar();
        axios({
            method: 'get',
            url: API_BASE_URL + url
        }).then((response) => {
            success(response);
        }).catch((error) => {
            this.showErrorInfo(error.message);
        }).then(() => {
            this.hideProgressbar();
        });
    }

    getList() {
    }

    getBy() {
    }

    postBy() {
    }

    postList() {
    }

    appRender() {
        return (
            <h1>AppComponent</h1>
        );
    }


    render() {
        return (
            <React.Fragment>
                {showLoader(this.state.isSystemProgressBarEnabled)}
                <AppSnackBar variant={this.state.systemSnackBarVariant} isOpen={this.state.showSystemSnackBar}
                             message={this.state.systemSnackBarMessage} onClose={this.closeSnackBar}/>
                {this.appRender()}
            </React.Fragment>
        )
    }
}
