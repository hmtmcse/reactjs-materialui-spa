import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppComponent from "../system/app-component";
import {
    Button, Checkbox, FormControlLabel, FormGroup, Paper
} from '@material-ui/core'


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class ComponentDemoPage extends AppComponent {


    showHideProgressBar = () => event => {
        if (event.target.checked){
            this.showProgressbar();
        }else{
            this.hideProgressbar();
        }
    };

    appRender () {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper>
                    <Button variant="contained" onClick={() => this.showSuccessInfo("Success Message")} color="primary" className={classes.button}>Success Info</Button>
                    <Button variant="contained" onClick={() => this.showErrorInfo("Error Message")} color="secondary" className={classes.button}>Error Info</Button>
                    <FormGroup row className={classes.button}>
                        <FormControlLabel control={<Checkbox value="checkbox1" />} onChange={this.showHideProgressBar()} label="Show Hide Progress bar"/>
                    </FormGroup>
                </Paper>
            </React.Fragment>

        );
    }
}
export default withStyles(styles)(ComponentDemoPage);