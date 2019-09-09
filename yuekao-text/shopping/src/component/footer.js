import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink activeClassName="actv" to="/refresh">刷新</NavLink>
                <NavLink activeClassName="actv" to="/classifi">分类</NavLink>
                <NavLink activeClassName="actv" to="/find">发现</NavLink>
                <NavLink activeClassName="actv" to="/cart">购物车</NavLink>
                <NavLink activeClassName="actv" to="/my">我的</NavLink>
            </footer>
        )
    }
}

export default Footer
