import React, { Component } from 'react'

export class StoryItem extends Component {
    render() {
        let {pic,filesize,name,artist} = this.props
        return (
            <div className="list" >
                <div className="imgs">
                    <img src={pic}/>
                </div>
                <div className="con">
                    <h3>{name}</h3>
                    <p>{artist} <span>播放:{filesize}</span></p>
                </div>
            </div>
        )
    }
}

export default StoryItem
