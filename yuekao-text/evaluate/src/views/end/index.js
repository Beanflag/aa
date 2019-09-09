import React, { Component } from 'react'
import Header from "../../component/header"

export class End extends Component {
    render() {
        return (
            <div className="wrap">
                <Header></Header>
                <div className="main">
                    已结束
                </div>
            </div>
        )
    }
}

export default End
