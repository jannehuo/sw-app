import React, { Component } from 'react'
import Character from './Modules/Character.js'
const urls = {
  characters: '//localhost:3000/characters/'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters:null
    }
  }
  componentDidMount() {
    fetch(urls.characters)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        characters:data
      })
    })
  }
  render() {
    let CharList;
    if(this.state.characters !== null) {
      CharList = this.state.characters.results.map(char => {
        return <Character name={char.name} key={char.name} />
      });
    }
    return (
      <div className="App">
        {CharList}
      </div>
    )
  }
}

export default App
