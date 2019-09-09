import React, { Component } from 'react'
import Home from "../views/home"
import Answer from "../views/answer"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"

export class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/answer" component={Answer}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}

export default Router