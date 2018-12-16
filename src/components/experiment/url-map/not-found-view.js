import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        color:'blue'
    }
});

class NotFoundView extends Component {
    render () {
        const { classes } = this.props;
        return <h1 className={classes.root}>404 Not Found!!   </h1>;
    }
}
export default withStyles(styles)(NotFoundView);