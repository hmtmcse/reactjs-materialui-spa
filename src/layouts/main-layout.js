import React, { Component } from 'react';
import classNames from 'classnames';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
    CssBaseline, Paper, Avatar, Typography, FormControl, InputLabel, Input, Button,
    withStyles, AppBar, Toolbar, IconButton, Badge, Drawer, Divider, List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import { mainLayoutJSS } from './../assets/jss/application-jss';
import NavigationElement from './../components/elements/navigation-element';


class MainLayout extends Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton,this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap className={classes.title}>
                                Dashboard
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}>
                        <div className={classes.toolbarIcon}>
                            <Typography variant="title" color="primary" align="center" noWrap>
                                HMTMCSE
                            </Typography>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <NavigationElement/>
                        </List>
                    </Drawer>
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
                </div>
            </React.Fragment>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(mainLayoutJSS)(MainLayout);