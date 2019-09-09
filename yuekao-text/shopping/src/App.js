import React, { Component } from 'react'
import Router from "./router/index"
import "./css/style.css"
import {Provider} from "react-redux"
import store from "./store/index"

export class App extends Component {
  render() {
    return <Provider store={store}><Router/></Provider>
  }
}

export default App
