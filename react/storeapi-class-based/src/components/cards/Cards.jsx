import React, { Component } from 'react'
import { CategoryContext } from '../../contexts/CategoryProvider'
import Card from './Card';
import Loading from '../ui/Loading';

export class Cards extends Component {
  static contextType = CategoryContext;

  constructor(){
    super();

    this.state = {
        data: undefined,
        category: undefined
    }
  }

  componentDidMount(){
    this.context.toggleLoading(true)
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {this.setState({data: data}); this.context.toggleLoading(false)})
  }

  componentDidUpdate(_, prevState){
    if(this.context.category !== prevState.category && this.context.isLoading === false){
        this.context.toggleLoading(true)
        fetch(this.context.category === undefined ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${this.context.category}`).then(res => res.json())
        .then(data => {this.setState({data: data, category: this.context.category}); this.context.toggleLoading(false)})
    }
  }

  render() {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-20 pb-16'>
        {this.context.isLoading === false ? this.state.data?.map((data, i) => {
            return <div className='flex items-center justify-center'><Card data={data} key={i} /></div>
        }) : <div className='mt-10'><Loading /></div>}
      </div>
    )
  }
}

export default Cards
