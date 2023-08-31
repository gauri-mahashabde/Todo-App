import React, { Component } from 'react'
import Ccomp from './Ccomp'
import {myContext} from './Acomp'

export default class 
 extends Component {
  render() {
    return (
      <div>
<h1>Component B</h1>

<myContext.Consumer>
    {data => <h3>{data}</h3>}
</myContext.Consumer>
{/* <Ccomp name = {this.props.name}></Ccomp> */}
      </div>
    )
  }
}
