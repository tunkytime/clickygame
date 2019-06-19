import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand" href="#">
        Clicky Game
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto text-white">
          <li className="mr-2">
            <span>Current Streak: {props.score}</span>
          </li>
          <li className="mr-2">
            <span>High Score: {props.highScore}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
