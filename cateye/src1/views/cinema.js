import React, { Component,Fragment } from 'react'
import Header from "../component/header"
import Footer from "../component/footer"

export default class Cinema extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="page">
                    影院
                </div>
                <Footer/>
            </Fragment>
        )
    }
}
