import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import {
    Table, TableRow, TableCell, TableHead, TableBody,TableFooter, TablePagination, Paper
} from '@material-ui/core';
import Board from 'react-trello'

const styles = theme => ({
    root: {
        color:'blue'
    }
});

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
                {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
        },
        {
            id: 'lane2',
            title: 'Completed',
            label: '0/0',
            cards: []
        }
    ]
};

class TrelloPage extends Component {


    render() {
        return <Board data={data} eventBusHandle={setEventBus}/>
    }
}
export default withStyles(styles)(TrelloPage);