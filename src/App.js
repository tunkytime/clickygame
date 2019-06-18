import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./style.css";

class App extends Component {
  state = {
    characters
  };

  shuffleCharacters = id => {
    // on button click, register which character was clicked and shuffle the characters array
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container mx-auto">
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col-sm-3">
                <CharacterCard
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
