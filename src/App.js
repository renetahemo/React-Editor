import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

class App extends React.Component {
    state = {text: ''};

    onEditorChange = (editorText) => {
        this.setState({text: editorText});
        console.log(this.state.text);
    }

    render(){
        return (
            <div className="ui segment">
                <Editor onEditorChange={this.onEditorChange} />
                <Preview editorText={this.state.text} />
            </div>
        )
    }
}

export default App;