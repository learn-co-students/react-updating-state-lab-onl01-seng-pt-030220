import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
        
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
    
    bitrate = () => {
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolution = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.settings.bitrate}</p>
                <button className="bitrate" onClick={this.bitrate}>Change the rate of bits</button>
                <p>{this.state.settings.video.resolution}</p>
                <button className="resolution" onClick={this.resolution}>Change the resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;