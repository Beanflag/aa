import React, { Component } from 'react'
import Refresh from "../views/refresh/"
import Classifi from "../views/classifi/"
import Find from "../views/find/"
import Cart from "../views/cart/"
import My from "../views/my/"
import Details from "../views/details/"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"

export class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/refresh" component={Refresh}></Route>
                <Route path="/classifi" component={Classifi}></Route>
                <Route path="/find" component={Find}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/my" component={My}></Route>
                <Route path="/details/:id" component={Details}></Route>
                <Redirect from="/" to="/refresh"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}

export default Router
