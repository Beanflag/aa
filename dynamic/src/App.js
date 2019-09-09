import React, { Component } from 'react'

import { BrowserRouter,Switch,Redirect} from 'react-router-dom'
import RouterVier from "./router"
import routes from "./router/routes"

export class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
        <Switch>
          {RouterVier(routes)}
          {/* <Redirect from='/' to='/home/list'></Redirect> */}
        </Switch>
      </div>
    </BrowserRouter>
  }
}

export default App
