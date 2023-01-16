import React, { Component } from 'react'
import "./App.css"
import Header from './Header'
import InputTodo from './InputTodo'
import TodoList from './TodoList'


export class TodoContainer extends Component {
  state = {todos:[{
    id:1,
    name:"joy"
},
{
    id:2,
    name:"ross"
}
]}
  render() {
    return (
      <div className='App'>
        <Header/>
        <InputTodo/>
        <TodoList Items={this.state.todos}/>
       
        
      </div>
    )
  }
}

export default TodoContainer



