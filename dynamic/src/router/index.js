// import React, { Component } from 'react'
// import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom"
// import Home from '../views/home';
// import Details from '../views/details';

// export class Router extends Component {
//     render() {
//         return <BrowserRouter>
//             <Switch>
//                 <Route path="/home" component={Home}></Route>
//                 <Route path="/details" component={Details}></Route>
//                 <Redirect from="/" to="/home"></Redirect>
//             </Switch>
//         </BrowserRouter>
//     }
// }

// export default Router

// routes={item.children}

import React from 'react'
import { Route } from 'react-router-dom'

function RouterView({routes}){
    return routes.map(item=>{
        return  <Route key={item.name} path={item.path} render={(history)=>{
                return <item.component  {...history} routes={item.children}></item.component>
        }} ></Route>     
    })
}

export default RouterView;
