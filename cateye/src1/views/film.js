import React, { Component,Fragment } from 'react'
import Header from "../component/header"
import Footer from "../component/footer"
import {NavLink,Switch,Route} from "react-router-dom"
import Hot from "./child/hot"
import Soon from "./child/soon"

export default class Film extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="page">
                    <div className="nav">
                        <div className="add" onClick={() => {this.props.history.push("/city")}}>北京</div>
                        <div className="cont">
                            <NavLink activeClassName="contse" to="/film/hot">正在热映</NavLink>
                            <NavLink activeClassName="contse" to="/film/soon">即将上映</NavLink>
                        </div>
                        <div className="searchs" onClick={() => {this.props.history.push("/search")}}>搜索</div>
                    </div>
                    <Switch>
                        <Route path="/film/hot" component={Hot}></Route>
                        <Route path="/film/soon" component={Soon}></Route>
                    </Switch>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}
