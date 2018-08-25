import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    Button, TextField, FormControl, InputLabel, Radio,
    Select,MenuItem, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, CardActions, CardHeader, Grid
} from '@material-ui/core'

const styles = theme => ({
    root: {
        color:'blue'
    }
});

class FormPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            countrySelect: 'bangladesh',
            states: [],
            genderRadio: '',
        };
    }


    countrySelectChange = event => {
        this.setState({countrySelect:event.target.value});
    };

    statesSelectChange = event => {
        this.setState({states:event.target.value});
    };

    genderRadioFill = event => {
        this.setState({genderRadio:event.target.value});
    };

    render(){
        const { classes } = this.props;
        const registrationForm = (
            <form>
                <Card>
                    <CardHeader title="Registration Form"/>
                    <CardContent>

                        <Grid container spacing={8}>
                            <Grid item xs={6}><TextField label="First name" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Last name" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Mobile" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="website" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Email" type="email" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Birthday" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Password" type="password" fullWidth/></Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Country</InputLabel>
                                    <Select value={this.state.countrySelect} onChange={this.countrySelectChange}>
                                        <MenuItem value="bangladesh">Bangladesh</MenuItem>
                                        <MenuItem value="australia">Australia</MenuItem>
                                        <MenuItem value="usa">USA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>States</InputLabel>
                                    <Select value={this.state.states} onChange={this.statesSelectChange} multiple>
                                        <MenuItem value="bangladesh">Bangladesh</MenuItem>
                                        <MenuItem value="australia">Australia</MenuItem>
                                        <MenuItem value="usa">USA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label="Single Checkbox" />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox value="checkbox1" />} label="Checkbox 1"/>
                                    <FormControlLabel control={<Checkbox value="checkbox2" />} label="Checkbox 2" />
                                    <FormControlLabel control={<Checkbox value="checkbox3" />} label="Checkbox 3"/>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup
                                        value={this.state.genderRadio}
                                        onChange={this.genderRadioFill}
                                        aria-label="Gender"
                                        name="gender1">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        <FormControlLabel
                                            value="disabled"
                                            disabled
                                            control={<Radio />}
                                            label="(Disabled option)"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Bio" fullWidth multiline rows={3}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>

                        <Grid container spacing={8} justify="flex-end">
                            <Grid item xs={1}><Button color="primary" type="submit" fullWidth variant="raised" children="Save"/></Grid>
                            <Grid item xs={1}><Button color="primary" type="submit" fullWidth variant="raised" children="Cancel"/></Grid>
                        </Grid>

                    </CardActions>
                </Card>
            </form>
        );
        return registrationForm;
    }
}
export default withStyles(styles)(FormPage);