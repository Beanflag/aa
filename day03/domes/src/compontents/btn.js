import React, { Component } from 'react'

export default class Btn extends Component {
    render() {
        return (
            <div className="btn">
                <button type="button">打开alert提示框</button>
                <button type="button">打开confirm提示框</button>
                <button type="button">打开prompt提示框</button>
            </div>
        )
    }
}
