import React, { Component } from 'react'
import TodoItems from './TodoItems'

export class TodoList extends Component {
  
  render() {

    return (
      <div>
        {this.props.Items.map((item)=>(
          <TodoItems  key = {item.id} data={item}/>
        ))}
         

      </div>
    )
  }
}

export default TodoList