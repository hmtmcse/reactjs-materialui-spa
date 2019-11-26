import Loadable from 'react-loadable';
import React, { Component } from 'react';

const LoadableBar = Loadable({
    loader: () => import('./../pages/form-page'),
    loading() {
        return <div>Loading...</div>
    }
});

export default class LoadableComponent extends Component {
    render() {
        return <LoadableBar/>;
    }
}