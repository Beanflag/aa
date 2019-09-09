import React, { Component } from 'react'
import axios from "axios"

export default class Nav extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3000/mock/banner.json").then(res => {
            // let data = res.data.map((item,index) => {
            //     return item.Content
            // })
            this.setState({
                data:res.data.BannerList
            })
        })
    }
    render() {
        let {data} = this.state
        return (
            <div className="navs">
                <ul>
                    {data.map((item,index) => <li key={index}>{item.Linkage}</li>)}
                </ul>
            </div>
        )
    }
}
