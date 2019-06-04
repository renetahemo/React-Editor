import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Preview.css';

const Preview = ({editorText}) => {
    return (
        <div className="previewDiv">
            <label><h1>Preview</h1></label>
            <div id="preview">
                <ReactMarkdown source={editorText} />
            </div>
        </div>
    )   
}

export default Preview;