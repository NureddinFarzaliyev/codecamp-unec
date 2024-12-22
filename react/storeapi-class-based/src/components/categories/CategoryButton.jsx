import React, { Component } from 'react'
import { CategoryContext } from '../../contexts/CategoryProvider';

export class CategoryButton extends Component {
  static contextType = CategoryContext;

  render() {
    const {category, isActive} = this.props

    return (
      <button disabled={this.context.isLoading} className={`m-3 p-3 border-2 ${isActive ? 'bg-red-900 ' : ''}`}
      onClick={() => {
        this.context.updateCategory(category);
        if(isActive) this.context.updateCategory(undefined)
      }}>

        {category}
        
      </button>
    )
  }
}

export default CategoryButton
