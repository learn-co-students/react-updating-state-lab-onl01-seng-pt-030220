// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
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
    }

    bitrateClick = () => {
        console.log(this)
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionClick = () => {
        console.log(this)
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        console.log(this)
        return(
            <div>
                <br></br>
                <button className="bitrate" onClick={this.bitrateClick}>
                    bitrate: {this.state.settings.bitrate}
                </button>
                <br></br><br></br>
                <button className="resolution" onClick={this.resolutionClick}>
                    resolution: {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}