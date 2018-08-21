import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        color:'blue'
    }
});

class DashboardPage extends Component {
    render () {
        const { classes } = this.props;
        return <h1 className={classes.root}>MyComponent</h1>;
    }
}
export default withStyles(styles)(DashboardPage);