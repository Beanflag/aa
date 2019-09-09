import React, { Component } from 'react'
import axios from "axios"
import Item from "../../component/item"

export default class Hot extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios.get("/ajax/movieOnInfoList?token=").then(res=>{
            this.setState({
                list:res.data.movieList
            })
        })
    }
    render() {
        let {list} = this.state
        return <div className="items">
            {list.map((item,index) => <Item {...item} key={index} prop={this.props}/>)}
        </div>
    }
}
