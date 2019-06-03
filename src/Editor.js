import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorText: 'Please enter your text'
        };
    }

    handleChange = async (event) => {
        await this.setState({editorText: event.target.value});
        this.props.onEditorChange(this.state.editorText);
    }

    render(){
        return (
            <div className="ui form">
                <div className="field"></div>
                <label>Editor</label>
                    <textarea id="editor" placeholder={this.state.editorText} onChange={this.handleChange}></textarea>
            </div>
        )
    }
}

export default Editor;