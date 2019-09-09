import React, { Component } from 'react'
import axios from "axios"
import Images from "../../component/images"
import Contexts from "../../component/contexts"
import BScroll from "better-scroll"

export default class Classification extends Component {
    state={
        data:["综合","销量","价格","最新"],
        list:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3000/mock/list.json").then(res => {
            this.setState({
                list:res.data.Datas.FlowerList
            },() => {
                new BScroll(".page")
            })
        })
    }
    render() {
        let {data,list} = this.state
        return (
            <div className="page">
                <div>
                    <ul className="classif">
                        {data.map((item,index) => <li key={index}>{item}</li>)}
                    </ul>
                    {list.map((item,index) => <div className="list" key={index}>
                        <Images imgs={item.Image}/>
                        <Contexts name={item.Name} int={item.Introduction} price={item.Price} />
                    </div>)}
                </div>
            </div>
        )
    }
}
