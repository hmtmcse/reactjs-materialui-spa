import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    TableRow, TableCell, TableHead, TableBody,TableFooter, TablePagination,
    TableSortLabel,Table, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Tooltip
} from '@material-ui/core'
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        color:'blue'
    }
});

const headers = [
    {sortKey: 'name', label: 'Display Name', numeric: false}
];

class AppSortableTableHeader extends Component {
    render () {
        const { sortOrder, sortByKey, clickToSortOrder, headers } = this.props;
        return (
            <TableHead>
                <TableRow>
                    {headers.map(row => {
                        return (
                            <TableCell
                                key={row.sortKey}
                                numeric={row.numeric}
                                sortDirection={sortByKey === row.sortKey ? sortOrder : false}>
                                <Tooltip
                                    title={"Sort by " + row.label}
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}>
                                    <TableSortLabel
                                        active={sortByKey === row.sortKey}
                                        direction={sortOrder}
                                        onClick={clickToSortOrder(row.sortKey)}>
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

AppSortableTableHeader.propTypes = {
    clickToSortOrder: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortByKey: PropTypes.string.isRequired,
    headers: PropTypes.map.isRequired,
};


class AppTable extends Component {

    render(){
        const {
            sortOrder, sortByKey, clickToSortOrder, headers,
            tableData
        } = this.props;

        return(
            <Table>
                <SortableTableHeader clickToSortOrder={clickToSortOrder} sortOrder={sortOrder} sortByKey={sortByKey} headers={headers}/>
                <TableBody>

                </TableBody>
            </Table>
        );
    }
}

AppTable.propTypes = {
    clickToSortOrder: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortByKey: PropTypes.string.isRequired,
    headers: PropTypes.map.isRequired,

    tableData: PropTypes.map.isRequired,
};


export default withStyles(styles)(AppTable);