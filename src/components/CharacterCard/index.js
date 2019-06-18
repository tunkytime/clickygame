import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card m-2 text-center">
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text" />
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CharacterCard;
