import React from 'react';
import ReactDOM from 'react-dom/client';
import Useref from './Practice/Useref';
//import TodoContainer from './Components/TodoContainer';o
import Hooks from "./Practice/Hooks"
import App from './Routing/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
      <Hooks/>  
    {/* <Useref/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

