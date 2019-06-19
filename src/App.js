import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import characters from "./characters.json";
import "./style.css";

let clickedArr = [];

class App extends Component {
  state = {
    characters,
    clicked: [],
    score: 0,
    highScore: 0
  };

  makeid(l) {
    let text = "";
    let char_list =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }

  handleClick = id => {
    characters.forEach(character => {
      if (character.id === id) {
        if (clickedArr.includes(id)) {
          clickedArr = [];
          this.setState({ clicked: [], score: 0 });
          this.updateHighScore();
        } else {
          clickedArr.push(id);
          this.setState({
            clicked: clickedArr,
            score: this.state.score + 1
          });
        }
      }
    });
    this.shuffleCharacters(id);
  };

  shuffleCharacters = () => {
    this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({ characters });
  };

  updateHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
  };

  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container>
          {" "}
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col-sm-3" key={this.makeid(9)}>
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
        </Container>
      </>
    );
  }
}

export default App;
