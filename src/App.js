import React, { Component } from 'react';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
 
    this.addTodo = this.addTodo.bind(this);
  }
  
  // 初期値の設定
  componentWillMount(){
    this.fetchResponse();
  }
  
  // リストの更新
  fetchResponse(){
    fetch('http://localhost:3001/todos')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        todo : res
      });
    })
  }
  
  // 新規追加
  addTodo() {
    fetch('http://localhost:3001/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: this.refs.newText.value
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    }).then( () => {
      // リストの更新
      this.fetchResponse();
      // 値の初期化
      this.refs.newText.value = "";
    })
  }
  
  // 編集機能
  updateTodo(todo) {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: todo.id,
        title: todo.title
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    })
  }
  
  // 削除機能
  deleteTodo(todo) {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: 'DELETE'
    }).then( () => {
      const todos = this.state.todo.filter(item => item.id !== todo.id)
      // 保存
      this.setState({
        todo : todos
      });
    })
  }

  render() {
    return (
      <div className="box">
        <h1>TODOアプリ</h1>
        <p>テキスト入力後にボタンを押してリストへ登録</p>
        <input type="text" ref="newText" className="list-textbox"/>
        <input type="button" value="追加" onClick={this.addTodo}/>
        <ul>
          {this.state.todo.map( todo => (
            <li key={todo.id} className="list-text">
              <input type="text" className="list-textbox"
                defaultValue={todo.title}
                onChange={e => todo.title = e.target.value}
              />
              <input type="button" value="更新" onClick={() => this.updateTodo(todo)}/>
              <input type="button" value="削除" onClick={() => this.deleteTodo(todo)}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
  
export default App;  
