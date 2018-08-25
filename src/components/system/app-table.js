import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    TableRow, TableCell, TableHead, TableBody,TableFooter, TablePagination,
    TableSortLabel,MenuItem, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Tooltip
} from '@material-ui/core'

const styles = theme => ({
    root: {
        color:'blue'
    }
});

class SortableTableHeader extends Component {
    render () {
        const { classes } = this.props;
        return (
            <TableHead>
                <TableRow>
                    {rows.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                numeric={row.numeric}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}>
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}>
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(row.id)}>
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}



export default withStyles(styles)(SortableTableHeader);