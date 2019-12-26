import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Layout/Header.js';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component{
state={
 todos: []
 
}

markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo =>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo;
    })})
}

delTodo=(id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id!== id)]});
}

addTodo=(title)=>{
  const newTodo={
    id: uuid.v4(),
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
  
}

  render(){
    return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>
        </div>
    </div>
  );
}
}
export default App;
