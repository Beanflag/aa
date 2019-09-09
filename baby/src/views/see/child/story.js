import React, { Component } from 'react'
import axios from "axios"
import StoryItem from "../../../component/story-item"

export class Story extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios.get("/baby/bb.php?type=getvideos&pagesize=30&collectid=27").then(res => {
            this.setState({
                list:res.data.list
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div className="wrap">
                {list.map((item,index) => item.id && <StoryItem {...item} key={item.id}/>)}
            </div>
        )
    }
}

export default Story
