import React, { Component,Fragment } from 'react'
import Header from "../component/header"
import Footer from "../component/footer"

export default class My extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="page">
                    我的
                </div>
                <Footer/>
            </Fragment>
        )
    }
}
