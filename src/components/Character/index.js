import React, { Component } from "react";
import characters from "../../characters.json";

class Character extends Component {
  render() {
    return (
      <>
        <h2>{characters[0].name}</h2>
      </>
    );
  }
}

export default Character;
