//step 1 is to import all the required hooks
import { useState,useEffect } from 'react'
import React from 'react'
//import Usestate from './Usestate';

function Useeffect() {
    //usestate syntax
    const [count, setcount] = useState(0);
    const [add , setadd]=useState(0);
    useEffect(()=>{setadd(count * 2)},[count]
        
    );
    return (
        //this is basic use state , the state of the variable count is updated 
      <>
        <div>Usestate</div>
  
        <p>You clicked {count} times</p>
  
        <button onClick={() => setcount(count + 1)}>click me</button>
        <p>calculation:{add}</p>
      </>
    )
}

export default Useeffect