import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    Grid, TextField, FormControlLabel, Checkbox, TableBody, TableFooter, Typography, Paper, Button
} from '@material-ui/core'
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import IconButton from "@material-ui/core/IconButton/IconButton";
import classnames from "classnames";
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    spaceBetween : {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
    },

    marginTop : {
        marginTop: 3,
    },
    paddingBottom : {
        paddingBottom: 0,
    },
});

class TaskPage extends Component {
    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>

                        <Card>
                            <CardHeader className={classes.paddingBottom}
                                avatar = { <Avatar aria-label="Recipe" className={classes.avatar}> </Avatar> }
                                title={<Typography variant="headline">Touhid Mia</Typography>}
                                subheader="Software Engineer"
                            />
                            <CardContent>
                                <Card className={classes.marginTop}>
                                    <CardHeader className={classes.paddingBottom}
                                        title={<Typography variant="subheading">Live From Space Live From Space Live From Space</Typography>}
                                        subheader="September 14, 2016"/>
                                    <CardActions className={classes.spaceBetween}>
                                        <div>
                                            <Chip label="Pending" color="secondary" className={classes.chip}/>
                                            <Chip label="Today" className={classes.chip}/>
                                            <Chip label="High" color="secondary" className={classes.chip}/>
                                        </div>
                                        <div>
                                            <Button variant="contained" size="small" color="primary">Details</Button>
                                        </div>
                                    </CardActions>
                                </Card>

                                <Card className={classes.marginTop}>
                                    <CardHeader className={classes.paddingBottom}
                                        title={<Typography variant="subheading">Live From Space Live From Space Live From Space</Typography>}
                                        subheader="September 14, 2016"/>
                                    <CardActions className={classes.spaceBetween}>
                                        <div>
                                            <Chip label="Pending" color="secondary" className={classes.chip}/>
                                            <Chip label="Today" className={classes.chip}/>
                                            <Chip label="High" color="secondary" className={classes.chip}/>
                                        </div>
                                        <div>
                                            <Button variant="contained" size="small" color="primary">Details</Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </CardContent>
                        </Card>


                        <Paper className={classes.paper}>
                            <Typography variant="title" gutterBottom>
                                Touhid Mia
                            </Typography>
                            <Paper className={classes.paper}>xs=3</Paper>
                            <Paper className={classes.paper}>xs=3</Paper>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}><Paper className={classes.paper}>xs=3</Paper></Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(TaskPage);