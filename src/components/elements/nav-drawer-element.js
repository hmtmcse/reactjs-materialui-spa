import React, { Component } from 'react';
import {
    Divider, Drawer, IconButton, List, Typography, withStyles
} from "@material-ui/core";
import classNames from "classnames";
import NavigationElement from "./navigation-element";

const styles = theme => ({
    root: {
        color:'blue'
    }
});

class NavDrawerElement extends Component {
    render () {
        const { classes } = this.props;
        return (
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
        );
    }
}

NavDrawerElement.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawerElement);