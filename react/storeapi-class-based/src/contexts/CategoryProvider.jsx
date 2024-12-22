import React, { Component, createContext } from 'react'

export const CategoryContext = createContext()

export class CategoryProvider extends Component {

  constructor(){
    super();

    this.state = {
      category: undefined
    }
    
  }
  
  updateCategory = (newCategory) => {
    this.setState({category: newCategory})
  }

  render() {
    return (
      <CategoryContext.Provider value={{category: this.state.category, updateCategory: this.updateCategory}}>
        {this.props.children}
      </CategoryContext.Provider>
    )
  }
}

export default CategoryProvider
