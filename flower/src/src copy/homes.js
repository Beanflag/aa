import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import Homes from "./flower/pages/home"
import Classification from "./flower/pages/classification"
import My from "./flower/pages/my"
import "./flower.css"

export default class Homea extends Component {
    render() {
        return (
            <div className="box">
                <Router>
                    <div className="header">
                        <h3>花礼网</h3>
                    </div>

                    <Route path="/home" component={Homes}></Route>
                    <Route path="/classification" component={Classification}></Route>
                    <Route path="/my" component={My}></Route>
                    <Redirect to="/home"></Redirect>

                    <div className="footer">
                        <NavLink activeClassName="nv" to="/home">首页</NavLink>
                        <NavLink activeClassName="nv" to="/classification">分类</NavLink>
                        <NavLink activeClassName="nv" to="/my">我的</NavLink>
                    </div>
                    
                </Router>
            </div>
        )
    }
}
