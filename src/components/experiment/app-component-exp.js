import AppComponent from "../system/app-component";
import React from 'react'

export default class AppComponentExp extends AppComponent {

    constructor(props) {
        super(props);
        this.state = {
            countrySelect: 'bangladesh',
            states: [],
            genderRadio: '',
        };
    }

    appRender(){
        return (
            <h1>ComponentName</h1>
        );
    }
}
