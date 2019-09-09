import React, { Component } from 'react'

export class SongItem extends Component {
    render() {
        let {pic,filesize,name,artist,id,type} = this.props
        return (
            <div className="list" onClick={() => {
                type.history.push(`/details/${id}`)
            }}>
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

export default SongItem