import React from "react";
import "./NavBar.css";

const NavBar = props => (
  
    <nav className="fixed-top">
      <div className="title">{props.children}</div>
      <div className="header">{props.msg}</div>
      <div className="score">Score: {props.score} | Top Score: {props.topscore}</div>
    </nav>
  
);

export default NavBar;