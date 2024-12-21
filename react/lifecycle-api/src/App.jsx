import React, { Component } from 'react'

export class App extends Component {

  constructor(){
    super();

    this.state = {
      character: {},
      count: 1
    }
  }

  fetchCharacter = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        character: data
      })
    })
  }

  componentDidMount(){
    this.fetchCharacter(this.state.count)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      this.state.character.name = ''
      this.fetchCharacter(this.state.count)
    }
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.character.name !== '' ? this.state.character.name : 'Loading...'}
        </h1>
        <div style={{display: 'flex', gap: '30px'}}>
          <button onClick={() => {this.setState({...this.state, count: this.state.count - 1 === 0 ? this.state.count : this.state.count - 1})}}>Prev Char</button>
          <h1>{this.state.count}</h1>
          <button onClick={() => {this.setState({...this.state, count: this.state.count + 1})}}>Next Char</button>
        </div>
      </div>
    )
  }
}

export default App
