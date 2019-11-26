import {Component} from "react";
import React from "react";
import { SingleSelect } from "react-select-material-ui";



class ReactSelectMaterialUi extends Component {



    render() {

        const options: string[] = ["Africa", "America", "Asia", "Europe"];

        return(
            <div className="App">
                <SingleSelect label="Akabaka" value="America" options={options} onChange={this.handleChange} />
            </div>
        );
    }
}
export default ReactSelectMaterialUi;