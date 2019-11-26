import {Fade, LinearProgress} from "@material-ui/core";
import React from "react";

const showLoader = (state) => {
    return(
        state ? (<Fade in={state}>
            <LinearProgress color="primary"/>
        </Fade>) : ""
    );
};


const showHideSnackBar = (isShow) => {

};

export {
    showLoader,
    showHideSnackBar
}