import React, { Component } from 'react'
import Footer from "../../component/footer"
import Header from "../../component/header"

export class My extends Component {
    render() {
        return (
            <div className="wrap">
                <Header/>
                <main>我的</main>
                <Footer/>
            </div>
        )
    }
}

export default My
