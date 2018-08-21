import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    Button,Paper, TextField, FormControl, InputLabel, Input,
    Radio, Table, TableRow, TableCell, TableHead, TableBody,TableFooter, TablePagination,
    Select,MenuItem, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Grid
} from '@material-ui/core'

const styles = theme => ({
    root: {
        color:'blue'
    }
});

class TablePage extends Component {
    render(){
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Touhid</TableCell>
                            <TableCell>touhid@hmtmcse.com</TableCell>
                            <TableCell>Bangladesh</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={20}/>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        );
    }
}
export default withStyles(styles)(TablePage);