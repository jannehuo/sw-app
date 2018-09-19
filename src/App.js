import React, { Component } from 'react'
import Characters from './Modules/Character.js'
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
    return (
      <div className="App">
        <Characters characters={this.state.characters ? this.state.characters.results : null} />
      </div>
    )
  }
}

export default App
