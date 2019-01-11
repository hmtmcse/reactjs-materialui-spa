import React, {Component} from "react";
import Markdown from "markdown-to-jsx";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


export default class MarkdownToJSX extends Component {


    constructor(props) {
        super(props);
        this.state = {
            textBoxData: "## Check Blow things\n" +
                "1. Data binding\n" +
                "2. Link upload\n" +
                "4. Other Data\n",
        };
    }


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({textBoxData: value});
    };

    render() {
        let message = "# Hello world!";
        return(
            <React.Fragment>
                <TextField multiline rows={15} label="Description" fullWidth value={this.state.textBoxData} onChange={this.handleChange}/>
                <Card>
                    <CardContent>
                        <Markdown children={this.state.textBoxData}/>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}