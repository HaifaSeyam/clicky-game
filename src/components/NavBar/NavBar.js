import React from "react";
import "./NavBar.css";

const NavBar = props => (
  
    <nav>
      <div className="title">{props.children}</div>
      <div className="header">Click an Image to Begin!</div>
      <div className="score">Score: {props.score} | Top Score: {props.topscore}</div>
    </nav>
  
);

export default NavBar;