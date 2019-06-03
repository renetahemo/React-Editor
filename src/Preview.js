import React from 'react';
import './Preview.css';

const Preview = ({editorText}) => {
    return (
        <div className="previewDiv">
            <label>Editor Preview</label>
            <div id="preview" className="ui form">
            {editorText}
            </div>
        </div>
    )   
}

export default Preview;