import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import Hear from "../views/hear/"
import See from "../views/see/"
import My from "../views/my/"
import Details from "../views/details"

export class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/hear" component={Hear}></Route>
                <Route path="/see" component={See}></Route>
                <Route path="/my" component={My}></Route>
                <Route path="/details/:type" component={Details}></Route>
                <Redirect from="/" to="/see"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}

export default Router
