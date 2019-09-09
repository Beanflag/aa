import React, { Component } from 'react'

export class Item extends Component {
    render() {
        let {title,price,url,id,prop} = this.props
        return (
            <div className="list" onClick={() => {
                prop.history.push(`/details/${id}`)
            }}>
                <div className="imgs">
                    <img src={url}/>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="price">
                    <p>￥{price}</p>
                </div>
            </div>
        )
    }
}

export default Item
