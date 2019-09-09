import React, { Component } from 'react'
import Child from "./component/child"

export default class App extends Component {
  state={
    list:['1',"2","3"],
    dtsa:[]
  }
  render() {
    let {list,dtsa} = this.state
    console.log(dtsa)
    return (
      <div className="box">
        <Child list={list} change={this.change}/>
        {dtsa.map((item,index) => <div>{item}</div>)}
      </div>
    )
  }
  change(res){
    // console.log(res)
    this.setState({
      dtsa:res
    })
  }
}
