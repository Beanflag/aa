import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink activeClassName="active-nav" to="/see">宝宝看</NavLink>
                <NavLink activeClassName="active-nav" to="/hear">宝宝听</NavLink>
                <NavLink activeClassName="active-nav" to="/my">我的</NavLink>
            </footer>
        )
    }
}

export default Footer
