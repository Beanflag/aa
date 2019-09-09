import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export class Header extends Component {
    render() {
        return <header>
            <div className="top">
                <div className="fan">&lt;</div>
                <h3>投票</h3>
                <div className="tou">
                    投
                </div>
            </div>
            <div className="nav">
                <div className="nuc">
                    <NavLink to="/home">全部</NavLink>
                    <NavLink to="/end">已结束</NavLink>
                    <NavLink to="/conduct">正在运行</NavLink>
                </div>
            </div>
        </header>
    }
}

export default Header
