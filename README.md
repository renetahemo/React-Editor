# React Editor
A Markdown WYSIWYG Editor for React.js, includes an Editor element and a Preview element.
It allows enter GitHub flavored markdown to Editor element and display it on Privew element as HTML.

### Instalation

You need to install it from NPM and include it in your own React build process.


```
npm install ReactEditor --save
```

## Usage
### App.js

```
import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends React.Component {
    state = {text: ''};

    //Initializing editor text when markdown previewer first loads
    componentDidMount() {
        this.onEditorChange('# Hi \n## Please type some text \n[GitHub flavored Markdow](https://github.github.com/gfm) \n\n*inline code* \n\n`` code block `` \n\n- list item \n\n> blockqoute \n\n![image](/url) \n\n**bold text**');
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
```
Properites:
* State value **text** initialized as a String by componentDidMount function
* **defaultText** prop of Editor component get state value **text** and displays it
* **OnEditorChange** - get value from Editor component on change
* **editorText** prop of Preview component updated by state value **text**;

### Editor.js

```
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
```
Properites:
* **handleChange** - function called when a change is made in the textarea
* State value **editorText** is updated by textarea value entered
* **onEditorChange** props of App is updated by **editorText**

### Preview.js

```
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
```
Properites:
* **editorText** props value from App
* The Markdown parsed by ReactMarkdown library and displays it as html

## Built With

* React
* JavaScript
* CSS
* react-markdown libarary

