import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {title: 'JavaScriptを覚える'},
        {title: 'React覚える'},
        {title: 'JQuery覚える'},
        {title: 'Railsを覚える'}
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <ul>
          {this.state.todo.map( (todo, i) => {
            return <li key={i}> <input type="button" value="x" /> {todo.title}</li>
          })}
        </ul>
        <input type="text" />
        <input type="button" value="追加" />
      </div>
    );
  }
}

export default App;