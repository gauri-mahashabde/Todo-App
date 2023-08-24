//step 1 is to import it
import { useState } from "react";
import React from "react";

function Usestate() {
  //usestate syntax
  //count the variable
  //setcount is the function which when called will update the state of count
  const [count, setcount] = useState(0);
  return (
    <>
      <div>Usestate</div>

      <p>You clicked {count} times</p>

      <button onClick={() => setcount(count + 1)}>click me</button>
    </>
  );
}

export default Usestate;
