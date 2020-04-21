import React from 'react';
import './App.css';
import axios from 'axios';
import Card from "./components/card"

class App extends React.Component{

  componentDidMount = async () => {

    const url = "https://pokeapi.co/api/v2/pokemon"
    const result = await axios.get(url)
    console.log(result.data.results)

    this.setState({ pokemons: result.data.results })
    


  }

  getPhoto = number => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
    return url
  }


  state = {

    name: "Hello World",
    pokemons: []

  }


  render(){
console.log(this.state.pokemons)
  return (
  <div>
    <ul>
      {
        this.state.pokemons.length > 0 ?
        this.state.pokemons.map((pokemon, i) => {
          return(
        <Card key={pokemon.name}
           photo={this.getPhoto(i + 1)} 
            name={pokemon.name} />)
        }) : <p>Vazio</p>
      }

    </ul>
    </div>)
  }
}







/*function App() {

  "https://pokeapi.co/api/v2/"

  return /*(
    <div className="App">

    </div>
  )
}*/

export default App;
