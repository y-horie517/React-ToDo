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
    this.addTodo = this.addTodo.bind(this);
  }

// 新規追加
addTodo(){
  // 追加
  this.state.todo.push({
    title: this.refs.newText.value
  });

  // 保存
  this.setState({
    todo: this.state.todo
  });

  // 初期化
  this.refs.newText.value='';

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
        <input type="text" ref="newText"/>
        <input type="button" value="追加" onClick={this.addTodo}/>
      </div>
    );
  }
}

export default App;