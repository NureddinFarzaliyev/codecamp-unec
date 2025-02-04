import React, { Component } from 'react'
import Categories from './components/categories/Categories'
import CategoryProvider from './contexts/CategoryProvider'
import Cards from './components/cards/Cards'

export class App extends Component {
  render() {
    return (
      <CategoryProvider>
        <div className='min-h-dvh bg-background'>
        <Categories />
        <Cards />
        </div>
      </CategoryProvider>
    )
  }
}

export default App
