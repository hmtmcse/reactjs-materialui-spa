import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export  default class EditorConvertToMarkdown extends Component {


    constructor(props) {
        super(props);
        this.state = {
            editorState: undefined,
        };
    }

    onEditorStateChange(editorState){
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={(event, xyz) =>{this.onEditorStateChange(event, xyz)} }
                />
                <textarea
                    disabled
                    value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        );
    }
}