import React, { Component } from 'react'
import Header from "../../component/header"
import Footer from "../../component/footer"

export class My extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <main>
                     我的
                </main>
                <Footer/>
            </div>
        )
    }
}

export default My
