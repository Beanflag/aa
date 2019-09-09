import React, { Component } from 'react'
import Tab from "./components/tab"
import data from "./data/list.json"
 
export default class App extends Component {
  render() {
    return (
      <div>
          <Tab data={data}></Tab>
      </div>
    )
  }
}
