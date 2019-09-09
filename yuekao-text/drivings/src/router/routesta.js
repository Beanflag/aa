import React from 'react'
import routes from './index'
import {BrowserRouter as Router} from 'react-router-dom'; 
import RouterView from './routerview';
function  Rts(){
    return <Router><RouterView routes={routes}></RouterView></Router>
}

export default Rts