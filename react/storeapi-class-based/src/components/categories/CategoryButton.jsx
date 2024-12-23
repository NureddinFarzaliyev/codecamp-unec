import React, { Component } from 'react'
import { CategoryContext } from '../../contexts/CategoryProvider';

export class CategoryButton extends Component {
  static contextType = CategoryContext;

  render() {
    const {category, isActive} = this.props

    return (
      <button disabled={this.context.isLoading} className={`py-2 px-2 sm:px-8 rounded-lg shadow-md hover:scale-105 disabled:hover:scale-100 disabled:opacity-60 transition bg-accent ${isActive ? 'btn-glow' : ''}`}
      onClick={() => {
      this.context.updateCategory(category);
      if(isActive) this.context.updateCategory(undefined)
      }}>

      {category.charAt(0).toUpperCase() + category.slice(1)}
      
      </button>
    )
  }
}

export default CategoryButton
