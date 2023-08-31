import React, { Component } from 'react'
import Bcomp from './Bcomp'

export class Acomp extends Component {
    state = {name:"Gauri Mahashabde"}
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <Bcomp name = {this.state.name}></Bcomp>
      </div>
    )
  }
}

export default Acomp