import React, { Component } from 'react'
import axios from "axios"

export class Cartoon extends Component {
    componentDidMount(){
        axios.get('/baby/bb.php?type=getvideos&pagesize=30').then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                动画片
            </div>
        )
    }
}

export default Cartoon
