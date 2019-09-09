import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import Film from "../views/film"
import Cinema from "../views/cinema"
import My from "../views/my"
import City from "../views/city"
import Search from "../views/search"
import Details from "../views/details"


export default class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/film" component={Film}></Route>
                <Route path="/cinema" component={Cinema}></Route>
                <Route path="/my" component={My}></Route>
                <Route path="/city" component={City}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/details/:id" component={Details}></Route>
                <Redirect from="/" to="/film/hot"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}
