import React, { Component } from 'react';
import {
    CssBaseline, withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { mainLayoutJSS } from './../assets/jss/application-jss';
import NavigationElement from './../components/elements/navigation-element';
import {LayoutsRoutesMap} from './../config/router';
import {PageRoutesMap} from "../config/router";
import Route from "react-router-dom/es/Route";


class MainLayout extends Component {

    isMainLayout(){
        let url = this.props.location.pathname;
        if (url === "/"){
            return true;
        }
        let isMain = true;
        LayoutsRoutesMap.map((route, i) => {
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
                        {PageRoutesMap.map((route, key) =>{
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