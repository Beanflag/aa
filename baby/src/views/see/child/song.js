import React, { Component } from 'react'
import axios from "axios"
import SongItem from "../../../component/song-item"

export default class Song extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios.get("/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then(res => {
            this.setState({
                list:res.data.list
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div className="wrap">
                {list.map((item,index) => item.id && <SongItem {...item} key={index} type={this.props}/>)}
            </div>
        )
    }
}
