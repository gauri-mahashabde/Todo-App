import React, { Component, createContext } from 'react'
import Bcomp from './Bcomp'
 export const myContext = createContext();

export class Acomp extends Component {
    state = {name:"Gauri Mahashabde"}
  render() {
    return (
      <div>
         <h1>Component A</h1> 
        {/* <Bcomp name = {this.state.name}></Bcomp> */}
        <myContext.Provider value={this.state.name}>
        <Bcomp/>
        </myContext.Provider>
      </div>
    )
  }
}

export default Acomp