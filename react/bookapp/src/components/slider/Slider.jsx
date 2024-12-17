import React, { Component } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SliderBtn from './SliderBtn';

export class Slider extends Component {

    // this.props.slides is an array consisting COMPONENTS which'll be rendered in the slider

    constructor(props){
        super(props);

        this.state = {
            currentSlide: 0,
            totalSlides: this.props.slides.length
        }
    }
    
    nextSlide = () => {
        this.setState({...this.state, currentSlide: this.state.currentSlide + 1 >= this.state.totalSlides ? 0 : this.state.currentSlide + 1})
    }

    prevSlide = () => {
        this.setState({...this.state, currentSlide: this.state.currentSlide - 1 < 0 ? this.state.totalSlides - 1 : this.state.currentSlide - 1})
    }

    render() {
    return (
        <div className='flex md:gap-1 lg:gap-5 items-center'>
            <SliderBtn fn={this.prevSlide} style={{left: "0"}}> <FaChevronLeft /> </SliderBtn>
            <div className='shadow-lg'>
                {this.props.slides[this.state.currentSlide]}
            </div>
            <SliderBtn fn={this.nextSlide} style={{right: "0"}}> <FaChevronRight /> </SliderBtn>
        </div>
    )
    }
}

export default Slider
