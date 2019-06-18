import React from 'react';
import ReactDOM from 'react-dom';

// import styles from './App.css';

// CodePenでの表示用
const Component = React.Component;

// Listコンポーネントの作成
function List(props){
  return (
    <ul>
      {props.todo.map( (todo, i) => {
        return <li key={i} className="listtext"> <input type="button" value="☓"
                              onClick={() => props.deleteTodo(i)}/> {todo.title}</li>
      })}
    </ul>
  )
};

// Inputコンポーネントの作成
class Input extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(){
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value='';
  }
  render() {
    return (
      <div>
          <input type="text" ref="newText"/>
          <input type="button" value="追加" onClick={this.addTodo}/>
      </div>
    )
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
       { title: 'JavaScript覚える' } ,
       { title: 'jQuery覚える' } ,
       { title: 'ES2015覚える' } ,
       { title: 'React覚える' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({
      title: value
    });
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
 
  // 削除機能
  deleteTodo(i) {
    // 削除
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
 
  render() {
    return (
      <div className="box">
        <h1>TODOアプリ</h1>
         <h5>やるべきことを入力してリストに追加してください</h5>
        <Input addTodo={this.addTodo} />
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
// CodePenでの表示では不要なのコメントアウト
export default App;

// CodePenで表示を行う用の処理
ReactDOM.render(
	<App />,
	document.getElementById('root')
);