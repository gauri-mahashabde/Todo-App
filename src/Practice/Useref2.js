import { useState, useEffect, useRef } from "react";
import React from "react";

function Useref2() {
  const [myData, setMyData] = useState("");
  //const [count , setcount] = useState(0);
  const count = useRef(10);
  const inputElem = useRef("");
  //console.log(count);
  const changeStyle = () =>{
    console.log(inputElem);
    inputElem.current.style .backgroundColor = "#82E0AA"
    inputElem.current.focus();
  }

  useEffect(() => {
    //setcount(count + 1)
    count.current = count.current + 1;
  });
  return (
    <>
      <div>Useref</div>
      <input
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>The number of time render : {count.current}</p>
      <button onClick={changeStyle}>Submit</button>
    </>
  );
}

export default Useref2;
