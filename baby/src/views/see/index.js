import React, { Component } from 'react'
import Header from "../../component/header"
import Footer from "../../component/footer"
import {Route,Switch,Redirect,NavLink} from "react-router-dom"
import Song from "./child/song"
import Story from "./child/story"
import Cartoon from "./child/cartoon"

export class See extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <main>
                     <div className="nav">
                        <NavLink activeClassName="active-a" to="/see/song">儿歌</NavLink>
                        <NavLink activeClassName="active-a" to="/see/story">故事</NavLink>
                        <NavLink activeClassName="active-a" to="/see/cartoon">动画片</NavLink>
                     </div>
                     <Switch>
                         <Route path="/see/song" component={Song}></Route>
                         <Route path="/see/story" component={Story}></Route>
                         <Route path="/see/cartoon" component={Cartoon}></Route>
                         <Redirect from="/see" to="/see/song"></Redirect>
                     </Switch>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default See
