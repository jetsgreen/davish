import React from "react";
import "./characters.css";

function CharactersCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="img-container">
              <img alt={props.id} src={props.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersCard;
