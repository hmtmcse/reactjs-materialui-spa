import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import RaSelect from "./ra-select";

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));


export default class RaSelectTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            single: null,
            multi: null,
            a: {value: "Bangladesh", label: "Bangladesh"},
        };
    }



    handleChange = name => value => {
        console.log(value);
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (<React.Fragment>
                <RaSelect options={suggestions} onChange={this.handleChange('single')} value={this.state.single}/>
                <RaSelect options={suggestions} onChange={this.handleChange('multi')} value={this.state.multi} isMulti/>

                <RaSelect options={suggestions} onChange={this.handleChange('a')} value={this.state.a} label="Select"/>
                <RaSelect options={suggestions} onChange={this.handleChange('b')} value={this.state.b} label="Select" isClearable/>
            </React.Fragment>
        );
    }
}
