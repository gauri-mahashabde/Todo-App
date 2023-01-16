import React, { Component } from 'react'

export default class TodoItems extends Component {
  render() {
    return (
        <>
      <div>
      
      <li>
    <input type="checkbox" /> {this.props.data.name}
  </li>
      </div>
      
      </>
    )
  }
}
