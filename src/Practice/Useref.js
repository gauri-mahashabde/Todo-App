import { useState, useEffect, useRef } from "react";
import React from "react";

function Useref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(10);

  useEffect(() => {
    count.current = count.current + 1;
  });
  const inputElement = useRef();

  const focusInput = () => {
    console.log(inputElement);
    inputElement.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default Useref;
