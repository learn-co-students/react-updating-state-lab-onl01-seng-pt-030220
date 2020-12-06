// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor (props) {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
        //   this.changeState = this.changeState.bind(this);
        //   this.changeRes = this.changeRes.bind(this);
    }

    changeState = () => {
        console.log("bitrate")
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
              }
        })
    }


    changeRes = () => {
        console.log("res")
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                  resolution: '720p'
                }
              }
        
        })
    }

    

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.changeState}> </button>,
                <button className="resolution" onClick={this.changeRes}> </button>
            </div>
            
        )
    }
}