import React, { Component } from 'react'
import { CategoryContext } from '../../contexts/CategoryProvider';
import CategoryButton from './CategoryButton';
import Loading from '../ui/Loading';

export class Categories extends Component {
    
  static contextType = CategoryContext;

  constructor(){
    super();

    this.state = {
        data: undefined
    }
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(data => this.setState({data: data}))
  }

  render() {
    return (
      <div className='flex items-center justify-center flex-col sm:flex-row gap-4 py-4 sm:py-0 min-h-32 sm:h-32 text-white'>
        {this.state.data ? 
        this.state.data.map((category, i) => <CategoryButton category={category} key={i} isActive={this.context.category === category} />) : 
        <Loading />}
      </div>
    )
  }
}

export default Categories
