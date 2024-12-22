import React, { Component, createContext } from 'react'

export const CategoryContext = createContext()

export class CategoryProvider extends Component {

  constructor(){
    super();

    this.state = {
      category: undefined,
      isLoading: false
    }
    
  }
  
  updateCategory = (newCategory) => {
    this.setState({category: newCategory})
  }

  toggleLoading = (boolean) => {
    this.setState({isLoading: boolean})
  }

  render() {
    return (
      <CategoryContext.Provider value={{category: this.state.category, updateCategory: this.updateCategory, isLoading: this.state.isLoading, toggleLoading: this.toggleLoading}}>
        {this.props.children}
      </CategoryContext.Provider>
    )
  }
}

export default CategoryProvider
