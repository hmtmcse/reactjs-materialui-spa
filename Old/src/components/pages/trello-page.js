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

const CustomCard = props => {
    return (
        <div>
            <header
                style={{
                    borderBottom: '1px solid #eee',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: props.cardColor
                }}>
                <div style={{fontSize: 14, fontWeight: 'bold'}}>{props.name}</div>
                <div style={{fontSize: 11}}>{props.dueOn}</div>
            </header>
            <div style={{fontSize: 12, color: '#BD3B36'}}>
                <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{props.subTitle}</div>
                <div style={{padding: '5px 0px'}}>
                    <i>{props.body}</i>
                </div>
                <div style={{marginTop: 10, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold'}}>
                    {props.escalationText}
                </div>
            </div>
        </div>
    )
};

const customCardData = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned Tasks',
            cards: [
                {
                    id: 'Card1',
                    name: 'John Smith',
                    dueOn: 'due in a day',
                    subTitle: 'SMS received at 12:13pm today',
                    body: 'Thanks. Please schedule me for an estimate on Monday.',
                    escalationText: 'Escalated to OPS-ESCALATIONS!',
                    cardColor: '#BD3B36',
                    cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15}
                },
                {
                    id: 'Card2',
                    name: 'Card Weathers',
                    dueOn: 'due now',
                    subTitle: 'Email received at 1:14pm',
                    body: 'Is the estimate free, and can someone call me soon?',
                    escalationText: 'Escalated to Admin',
                    cardColor: '#E08521',
                    cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #E08521', marginBottom: 15}
                }
            ]
        }
    ]
};


class TrelloPage extends Component {


    render() {
        // return( <Board data={customCardData} customCardLayout><CustomCard /></Board>);
        return <Board data={data}/>
    }
}
export default withStyles(styles)(TrelloPage);