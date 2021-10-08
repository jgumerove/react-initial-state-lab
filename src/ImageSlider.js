// your ImageSlider code here!
import React, { Component } from 'react'

class ImageSlider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentSlideIndex: 0,
        }
    }
    
    render() {
        const {currentSlideIndex} = this.state
        return (
            <div>
                I am on slide {currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider
