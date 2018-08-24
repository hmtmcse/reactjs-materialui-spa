import React from 'react';
import ReactDOM from 'react-dom';
import {LayoutRouter} from './config/router';
import LoadableComponent from './components/experiment/loadable-exp';
import ClassTestExp from './components/experiment/class-test-exp';
import AppComponentExp from './components/experiment/app-component-exp';

let classTestExp = new ClassTestExp();
classTestExp.truFunction();

ReactDOM.render(<LayoutRouter/>, document.getElementById('root'));
