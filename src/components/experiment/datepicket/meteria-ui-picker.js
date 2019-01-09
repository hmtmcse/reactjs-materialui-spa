import React from 'react';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';


function DatePickers(props) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Root />
        </MuiPickersUtilsProvider>
    );
}




