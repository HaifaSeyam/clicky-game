import React from "react";
import "./ButterflyCard.css";

const ButterflyCard = props => (
  
    <div className="card">
        <img className="card-img-top cardImg" alt="img" src={props.image} onClick={props.imgSelect}/>
    </div>
  
);

export default ButterflyCard;