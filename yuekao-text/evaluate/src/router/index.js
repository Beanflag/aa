import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import Home from "../views/home/"
import End from "../views/end/"
import Conduct from "../views/conduct/"
import Details from "../views/details/"

export class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/end" component={End}></Route>
                <Route path="/conduct" component={Conduct}></Route>
                <Route path="/details" component={Details}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}

export default Router
