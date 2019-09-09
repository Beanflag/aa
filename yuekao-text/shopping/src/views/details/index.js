import React, { Component } from 'react'
import axios from "axios"
import {connect} from "react-redux"

export class Details extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        let {id} = this.props.match.params
        axios.get(`/api/data?id=${id}`).then(res => {
            this.setState({
                data:res.data.data
            })
        })
    }
    render() {
        let {title,price,url,id} = this.state.data
        return (
            <div className="details">
                <div className="imges">
                    <img src={url}/>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="price">
                    <p>￥{price}</p>
                </div>
                <div className="btn">
                    <button onClick={() => {
                        this.props.add(this.state.data)
                    }}>添加购物车</button>
                    <button onClick={() => {
                        this.props.history.push("/cart")
                    }}>去购物车</button>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {}
},(dispatch)=>{
    return {
        add(str){
            dispatch({type:"ADD",str,id:str.id})
        }
    }
})(Details)
