import React, { Component } from 'react'
import Footer from "../../component/footer"
import Header from "../../component/header"

export class Classifi extends Component {
    render() {
        return (
            <div className="wrap">
                <Header/>
                <main>分类</main>
                <Footer/>
            </div>
        )
    }
}

export default Classifi
