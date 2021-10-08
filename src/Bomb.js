// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             secondsLeft: this.props.initialCount,
        }
    }

    decrease = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    }
    
    render() {
        const {secondsLeft} = this.state
        return secondsLeft > 0 ? (
            <div onClick={this.decrease}>
               {secondsLeft} seconds left before I go boom!
            </div>
        ) : (
            <div>
                Boom!
            </div>
        )
    }
}

export default Bomb
