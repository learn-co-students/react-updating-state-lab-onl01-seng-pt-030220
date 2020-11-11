// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {timesClicked: 0}
    }

    buttonClicked = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }

    render() {
        return(
            <div>
                <button onClick={this.buttonClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }


}