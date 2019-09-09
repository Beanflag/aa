import React, { Component } from 'react'
import axios from "axios"

export default class Details extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        let id = this.props.match.params.type
        axios.get("/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then(res => {
            this.setState({
                data:res.data.list.filter(item => item.id===id)
            })
        })
    }
    render() {
        let {data} = this.state
        return (
            <div>
                {data.map((item,index) => <img src={item.pic} key={item.id}/>)}
            </div>
        )
    }
}
