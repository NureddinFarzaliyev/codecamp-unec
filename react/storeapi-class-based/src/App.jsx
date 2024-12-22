import React, { Component } from 'react'
import Categories from './components/categories/Categories'
import CategoryProvider from './contexts/CategoryProvider'

export class App extends Component {
  render() {
    return (
      <CategoryProvider>
        <Categories />
      </CategoryProvider>
    )
  }
}

export default App
