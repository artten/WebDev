import './App.css';
import React from 'react';
// import Item from './item'

class FilmItem extends React.Component {
  render() {
    return (
      <li>{this.props.film}</li>
    )
  }
}

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      name:null,
      height:null,
      homeworld:null,
      films:[]

    }
  }
  getNewCharacter() {
    const random = Math.ceil(Math.random()*82)

    const url = `https://swapi.dev/api/people/${random}/`

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        height:data.height,
        homeworld:data.homeworld,
        films:data.films
  
      }
      ))

      fetch(this.state.homeworld)
      .then(response => response.json())
      .then(data => this.setState({
        homeworld:data.name,
  
      }
      ))
    
  };



  render() {
    const movies = this.state.films.map((film,i) => {
      return <FilmItem key={i} film={film}/>
    })
    return (
      <div>
        {
          this.state.name != null &&
          <div>
              <h1>Name {this.state.name}</h1>
          <p>{this.state.height} cm</p>
          <p>Homeworld: {this.state.homeworld}</p>
          <ul>
           {movies}
          </ul>
          </div>
        }

        <button type='button' 
        onClick={() => this.getNewCharacter()}
         className='btn'>
        Randomaize
      </button>
      </div>
    )
  }
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
