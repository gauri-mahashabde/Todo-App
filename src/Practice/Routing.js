import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import User from "./Users";
import Home from "./Home";

function Routing() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about"></Link>
              </li>
              <li>
                <Link to="/users"></Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
           <Route path="/about">
            <About/>
          </Route> 
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <User/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}



export default Routing;

