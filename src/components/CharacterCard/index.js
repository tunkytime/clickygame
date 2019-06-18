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
        <button
          id={props.id}
          className="btn btn-primary btn-lg"
          onClick={() => props.handleClick(props.id)}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
