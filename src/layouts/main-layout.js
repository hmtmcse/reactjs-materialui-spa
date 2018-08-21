import React, { Component } from 'react';
import {
    CssBaseline, Paper, Avatar, Typography, FormControl, InputLabel, Input, Button,
    withStyles, AppBar, Toolbar, IconButton, Badge, Drawer, Divider, List
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { mainLayoutJSS } from './../assets/jss/application-jss';
import NavigationElement from './../components/elements/navigation-element';
import {LayoutsRoutes} from './../config/router';
import {PageRoutes} from "../config/router";


class MainLayout extends Component {

    isMainLayout(){
        let url = this.props.location.pathname;
        if (url === "/"){
            return true;
        }else{
            return false;
        }
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
                        <Typography variant="display1" gutterBottom>
                            Orders
                        </Typography>
                        <Typography component="div">

                        </Typography>
                        <Typography variant="display1" gutterBottom>
                            Products
                        </Typography>
                        <div className={classes.tableContainer}>

                        </div>
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