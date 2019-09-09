import React, { Component } from 'react'
import axios from "axios"

import { BrowserRouter,Switch,Redirect} from 'react-router-dom'
import RouterVier from "../router"
import routes from "../router/routes"

export class Home extends Component {
    // componentDidMount(){
    //     axios.get("/api/list").then(res=>{
    //         console.log(res)
    //     })
    // }
    render() {
        return (
            <div>
                首页
            </div>
        )
    }
}

export default Home
