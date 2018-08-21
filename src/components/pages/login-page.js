import React, { Component } from 'react';
import { loginPageJSS } from './../../assets/jss/application-jss';
import {
    CssBaseline, Paper, Avatar, Typography, FormControl, InputLabel, Input, Button,
    withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import LockIcon from '@material-ui/icons/LockOutlined';


class LoginPage extends Component {
    render () {
        const { classes } = this.props;
        const loginUI = (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Login to Task Manager</Typography>
                        <form method="get" action="/dashboard" className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input  name="password" type="password" id="password"/>
                            </FormControl>
                            <Button type="submit" fullWidth variant="raised" color="primary" children="Sign in" className={classes.submit}/>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
        return loginUI;
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(loginPageJSS)(LoginPage);