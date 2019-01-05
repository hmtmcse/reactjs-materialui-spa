import React from 'react';
import ReactDOM from 'react-dom';
import UrlMapping from "./components/experiment/url-map/url-mapping";
import {LayoutRouter} from "./config/router";
import FormValidationExample from "./components/experiment/form-validation/form-validation-example";
import DatePickerEx1 from "./components/experiment/datepicket/date-picker-ex1";


ReactDOM.render(<DatePickerEx1/>, document.getElementById('root'));
// ReactDOM.render(<FormValidationExample/>, document.getElementById('root'));
// ReactDOM.render(<LayoutRouter/>, document.getElementById('root'));
// ReactDOM.render(<UrlMapping/>, document.getElementById('root'));
