import React from "react";
import "./score.css";


//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score {props.total}</h3>
    
  </div>
);

export default Score;