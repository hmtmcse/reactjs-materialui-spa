import {Component} from "react";
import React from "react";
import {
    Paper, Typography
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class FormDetailsView extends Component {



    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h4" component="h4" color="primary">
                        Issue Name
                    </Typography>
                    <Typography variant="p">
                        This basically a issue for data
                    </Typography>
                    <br/>

                    <Typography variant="h4" component="h4" color="primary">
                        Issue Name
                    </Typography>
                    <Typography variant="p">
                        This basically a issue for data
                    </Typography>
                    <br/>


                    <Typography variant="h4" component="h4" color="primary">
                        Issue Name
                    </Typography>
                    <Typography variant="p">
                        This basically a issue for data
                    </Typography>
                    <br/>


                    <Typography variant="h4" component="h4" color="primary">
                        Issue Name
                    </Typography>
                    <Typography variant="p">
                        This basically a issue for data
                    </Typography>
                    <br/>
                </Paper>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(FormDetailsView);