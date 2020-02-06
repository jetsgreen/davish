import React, { Component } from "react";
import CharactersCard from "./components/CharactersCard/characters";
import NavBar from "./components/NavBar/nav"
import Title from "./components/Title/title";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper/wrapper";
import Footer from "./components/Footer/footer"

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };
  // this.setState({ characters });

// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <NavBar />
      <Title />
      {this.state.characters.map(character => (
        <CharactersCard
          image={character.image}

        />
      ))}
      <Footer/>
    </Wrapper>
    
  );
}
 
}


export default App;
