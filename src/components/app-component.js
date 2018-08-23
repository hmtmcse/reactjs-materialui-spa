import React, {Component} from 'react';
import {
    Fade, LinearProgress, Checkbox,Snackbar
} from '@material-ui/core';


const SNACK_BAR_AUTO_HIDE_DURATION = 3000;

export default class AppComponent extends Component {



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



    showProgressbar(){this.setState({isSystemProgressBarEnabled: true})}

    hideProgressbar(){this.setState({isSystemProgressBarEnabled: false})}

    closeSnackBar(){this.setState({showSystemSnackBar: false})}

    showSuccessInfo(message){
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "success",
            systemSnackBarMessage: message
        });
    }

    showErrorInfo(message){
        this.setState({
            showSystemSnackBar: true,
            systemSnackBarVariant: "error",
            systemSnackBarMessage: message
        });
    }

    handleChange = () => event => {
        this.setState({isSystemProgressBarEnabled: event.target.checked});
    };

    appRender() {
        return (
            <h1>AppComponent</h1>
        );
    }

    render() {
        return (
            <React.Fragment>

                {
                    this.state.isSystemProgressBarEnabled ? (<Fade in={this.state.isSystemProgressBarEnabled}>
                        <LinearProgress color="primary"/>
                    </Fade>) : ""
                }

                {
                    this.state.showSystemSnackBar ? (
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={this.state.showSystemSnackBar}
                            autoHideDuration={SNACK_BAR_AUTO_HIDE_DURATION}
                            onClose={this.closeSnackBar}
                        />
                    ) : ""
                }


                <Checkbox
                    checked={this.state.isSystemProgressBarEnabled}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                />

                {this.appRender()}
            </React.Fragment>
        )
    }
}
