import React, { Component } from 'react'
import {BrowserRouter,Route,NavLink,Switch,Redirect} from "react-router-dom"
import Sign from "../views/sign"
import Register from "../views/register"
import List from "../views/list"

export class Router extends Component {
    render() {
        return <BrowserRouter>
            <div className="header">
                <div className="logo">
                    <img src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"/>
                </div>
                <div className="homes">
                    <NavLink to="/list">首页</NavLink>
                    <p>下载APP</p>
                    <input type="text"/>
                </div>
                <div className="sig">
                    <NavLink to="/sign">登录</NavLink>
                    <NavLink to="/register">注册</NavLink>
                </div>
            </div>
            <Switch>
                <Route path="/list" component={List}></Route>
                <Route path="/sign" component={Sign}></Route>
                <Route path="/register" component={Register}></Route>
                <Redirect from="/" to="list"/>
            </Switch>
        </BrowserRouter>
    }
}

export default Router
