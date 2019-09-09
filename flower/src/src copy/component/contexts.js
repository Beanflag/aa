import React, { Component } from 'react'

export default class Contexts extends Component {
    
    render() {
        let {name,int,price} = this.props
        return (
            <div className="con">
                <h3>{name}</h3>
                <p>{int}</p>
                <span>{price}</span>
            </div>
        )
    }
}
