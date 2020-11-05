import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }
    
    counter = (event) => {
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })

        /*
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
        */
    }

    render() {
        return (
            <div>
                <button onClick={this.counter}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;