// Code YouTubeDebugger Component Here

import { render } from 'enzyme'
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
    
    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
        }
        }}
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    resolutionHandle = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                resolution: "720p"
                }
            }
        });

    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
                <button className='resolution' onClick={this.resolutionHandle}>Resolution</button>
            </div>
        )

        
    }
}

export default YouTubeDebugger
