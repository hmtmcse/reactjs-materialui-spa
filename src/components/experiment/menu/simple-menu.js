import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export class SimpleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            navigation: {
                nav1: false,
                nav2: false,
            },
        };
    }


    handleClick = (event, name) => {
        this.setState({anchorEl: event.currentTarget});
        this.state.navigation[name] = true;
        this.setState({navigation: this.state.navigation});
    };

    handleClose = (event, name) => {
        this.setState({anchorEl: null});
        this.state.navigation[name] = false;
        this.setState({navigation: this.state.navigation});
        console.log(name);
    };

    componentDidMount() {

    }

    render() {
        const {anchorEl, navigation} = this.state;

        return (
            <React.Fragment>
                <div>
                    <Button type="button"
                        name="nav1"
                        onClick={event=>{this.handleClick(event, "nav1")}}>
                        Nav 1
                    </Button>
                    <Menu
                        id="nav1"
                        anchorEl={anchorEl}
                        open={navigation.nav1}
                        onClose={event =>{this.handleClose(event, "nav1")}}>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav1")}}>Profile</MenuItem>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav1")}}>My account</MenuItem>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav1")}}>Logout</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button
                        name="nav2"
                        onClick={event=>{this.handleClick(event, "nav2")}}>
                        Nav 2
                    </Button>
                    <Menu
                        id="nav2"
                        anchorEl={anchorEl}
                        open={navigation.nav2}
                        onClose={event =>{this.handleClose(event, "nav2")}}>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav2")}}>ABC</MenuItem>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav2")}}>My account</MenuItem>
                        <MenuItem onClick={event =>{this.handleClose(event, "nav2")}}>DEF</MenuItem>
                    </Menu>
                </div>
            </React.Fragment>
        );
    }
}