import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Preview.css';

const Preview = ({editorText}) => {
    return (
        <div className="previewDiv">
            <label>Editor Preview</label>
            <div id="preview" className="ui form">
                <ReactMarkdown source={editorText} />
            </div>
        </div>
    )   
}

export default Preview;