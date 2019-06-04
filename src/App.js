import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends React.Component {
    state = {text: ''};

    //Initializing editor text when markdown previewer first loads
    componentDidMount() {
        this.onEditorChange('# Hi \n## Please type some text \n[GitHub flavored Markdow](https://github.github.com/gfm) \n\n*inline code* \n\n```\ncode block\n``` \n\n- list item \n\n> blockqoute \n\n![image](/url) \n\n**bold text**');
    }

    //Updating state when editor element changed
    onEditorChange = (editorText) => {
        this.setState({text: editorText});
    }

    render(){
        return (
            <div className="AppDiv">
                    <div className="appColumn">
                        <Editor defaultText={this.state.text} onEditorChange={this.onEditorChange} />
                    </div>
                    <div className="appColumn">
                        <Preview editorText={this.state.text} />
                    </div>
            </div> 
        )
    }
}

export default App;