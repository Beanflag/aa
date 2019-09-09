import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {img,nm,showInfo,sc,star,globalReleased,id,prop} = this.props
        return (
            <div className="list">
                <div className="img">
                    <img src={img.replace("w.h","90.120")}/>
                </div>
                <div className="content">
                    <h3>{nm}</h3>
                    <span>观众评:{sc}</span>
                    <p>主演：{star}</p>
                    <p>{showInfo}</p>
                </div>
                <div className="btn">
                    <button className={globalReleased?'adds':'accs'} 
                    onClick={()=>prop.history.push(`/details/${id}`)}>{globalReleased?'购票':'预售'}</button>
                </div>
            </div>
        )
    }
}
