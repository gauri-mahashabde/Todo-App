import React, { Component } from 'react'

export class InputTodo extends Component {
  render() {
    onchange=(e)=>{
       e.preventDefault();
 console.log("event is triggered");
    }
    
    return (
        <form onSubmit={this.onchange}>
        <input type="text" placeholder="Add Todo..." />
        <button  >Submit</button>
      </form>
    )
  }
}

export default InputTodo