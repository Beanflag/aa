import React, { Component } from 'react'
import Home from "../../component/homea"
import axios from 'axios'
import Nav from "../../component/nav"
import Banner from "../../component/banner"

export default class Homes extends Component {
    state={
        list:[]
      }
      componentDidMount(){
        axios.get('http://localhost:3000/mock/swiper.json').then(res => {
          this.setState({
            list:res.data
          })
        })
      }
    render() {
        let {list} = this.state
        return (
          <div className="page">
            <Home list={list}/>
            <Nav/>
            <Banner/>
          </div>
        )
    }
}