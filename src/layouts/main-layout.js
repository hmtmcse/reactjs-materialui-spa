import React, { Component } from 'react';
import {
    CssBaseline, Paper, Avatar, Typography, FormControl, InputLabel, Input, Button,
    withStyles, AppBar, Toolbar, IconButton, Badge, Drawer, Divider, List
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { mainLayoutJSS } from './../assets/jss/application-jss';
import NavigationElement from './../components/elements/navigation-element';
import {LayoutsRoutes} from './../config/router';
import {AppRouter} from './../config/router';
import {PageRoutes} from "../config/router";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";


class MainLayout extends Component {

    isMainLayout(){
        let url = this.props.location.pathname;
        if (url === "/"){
            return true;
        }
        let isMain = true;
        LayoutsRoutes.map((route, i) => {
            if (route.path === url){
                isMain = false;
            }
        });
        return isMain;
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                {this.isMainLayout() ? (<div className={classes.root}>
                    <NavigationElement/>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        {PageRoutes.map((route, key) =>{
                            return <Route path={route.path} component={route.component} key={key} />;
                        })}
                    </main>
                </div>) : (<React.Fragment/>)};
            </React.Fragment>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(mainLayoutJSS)(MainLayout);