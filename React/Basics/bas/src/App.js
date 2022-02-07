import React, {Component} from 'react';
import '../src/App.css'
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{

  state ={
    todos:[
      {id:1, content:"Buy Milk from the store"},
      {id:2, content:"Go outside to play"}
    ]
  }

  deleteTodo =(id)=>{
    const newTodo = this.state.todos.filter((todo) =>{
      return(todo.id !== id);
    }); 
    this.setState({
      todos:newTodo
    })
  }

  addTodo =(todo) =>{
    todo.id = Math.random();
    const newTodo = [...this.state.todos]
    newTodo.push(todo);
    this.setState({
      todos:newTodo
    })
  }

  render(){
    return (
      <div className = 'App'>
      <h1>Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;