import React, { Component } from 'react'

export default class Images extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><img src={this.props.imgs}/></li>
                </ul>
            </div>
        )
    }
}
