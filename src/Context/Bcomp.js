import React, { Component } from 'react'
import Ccomp from './Ccomp'

export default class 
 extends Component {
  render() {
    return (
      <div>
<h1>Component B</h1>
<Ccomp name = {this.props.name}></Ccomp>
      </div>
    )
  }
}
