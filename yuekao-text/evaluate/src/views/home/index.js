import React, { Component } from 'react'
import Header from "../../component/header"

export class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header></Header>
                <div className="main">
                    全部
                </div>
            </div>
        )
    }
}

export default Home
