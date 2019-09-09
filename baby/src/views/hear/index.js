import React, { Component } from 'react'
import Header from "../../component/header"
import Footer from "../../component/footer"
import {NavLink,Switch,Route,Redirect} from "react-router-dom"
import Soog from "./child/song"
import Story from "./child/story"

export class Hear extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <main>
                     <div className="navs">
                         <p>
                             <NavLink to="/hear/song">儿歌</NavLink>
                             <NavLink to="/hear/story">故事</NavLink>
                         </p>
                     </div>
                     <Switch>
                         <Route path="/hear/song" component={Soog}></Route>
                         <Route path="/hear/story" component={Story}></Route>
                         <Redirect from="/hear" to="/hear/song"/>
                     </Switch>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Hear
