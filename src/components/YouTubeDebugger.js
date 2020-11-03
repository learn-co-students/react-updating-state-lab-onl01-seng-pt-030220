// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YoutubeDebugger extends Component {
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

    bitrateHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resHandler = () => {
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

    render(){
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler}>
                    Change Bitrate
                </button>
                <button className='resolution' onClick={this.resHandler}>
                    Change Resolution
                </button>
            </div>
        )
    }
}