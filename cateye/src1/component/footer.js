import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink activeClassName="fot" to="/film">电影</NavLink>
                <NavLink activeClassName="fot" to="/cinema">影院</NavLink>
                <NavLink activeClassName="fot" to="/my">我的</NavLink>
            </div>
        )
    }
}
