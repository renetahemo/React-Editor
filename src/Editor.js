import React from 'react';
import './Editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorText: ''
        };
    }

    //When editor changes, the state is updates and it's transfered to App using props
    handleChange = async (event) => {
        await this.setState({editorText: event.target.value});
        this.props.onEditorChange(this.state.editorText);
    }

    render(){
        return (
            <div className="editorElement">
                <label><h1>Editor</h1></label>
                <textarea id="editor" value={this.props.defaultText} onChange={this.handleChange}></textarea>
            </div>
        )
    }
}

export default Editor;