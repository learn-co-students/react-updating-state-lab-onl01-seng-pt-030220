// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
        timesClicked: 0
        }
        this.updateState = this.updateState.bind(this)
  
    }

    updateState(event) {
        this.setState({
            timesClicked: ++ this.state.timesClicked
        })
    }

    render() {
        return(
            <button onClick={this.updateState} >{this.state.timesClicked}</button>
        )
    }
}