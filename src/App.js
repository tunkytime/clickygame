import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./style.css";

let count = 0;

class App extends Component {
  state = {
    characters
  };

  handleClick = id => {
    let result;
    characters.forEach(character => {
      if (character.id === id) {
        return (result = character);
      }
    });
    console.log(result.name);
    this.shuffleCharacters(id);
  };

  shuffleCharacters = id => {
    this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({ characters });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container mx-auto">
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col-sm-3" key={count++}>
                <CharacterCard
                  handleClick={this.handleClick}
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
