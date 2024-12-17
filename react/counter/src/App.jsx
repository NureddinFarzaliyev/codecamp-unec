import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1 <= 0 ? 0 : this.state.counter - 1 
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 className={this.state.counter <= 0 ? 'no-text-glow' : ''}>{this.state.counter}</h1>
        <div>
          <button onClick={this.decrement} disabled={this.state.counter <= 0}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default App
