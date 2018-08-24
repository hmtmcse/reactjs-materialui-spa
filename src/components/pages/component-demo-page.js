import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppComponent from "../system/app-component";


const styles = theme => ({
    root: {
        color:'blue'
    }
});

class ComponentDemoPage extends AppComponent {
    appRender () {
        const { classes } = this.props;
        return <h1 className={classes.root}>ComponentDemo</h1>;
    }
}
export default withStyles(styles)(ComponentDemoPage);