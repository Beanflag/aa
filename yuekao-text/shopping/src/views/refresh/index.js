import React, { Component } from 'react'
import Footer from "../../component/footer"
import Header from "../../component/header"
import Item from "../../component/item"
import axios from "axios"

export class Refresh extends Component {
    state={
        list:{}
    }
    componentDidMount(){
        axios.get("/api/list").then(res => {
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div className="wrap">
                <Header/>
                <main>
                    {list.length && list.map((item,index)=> <Item {...item} key={item.id} prop={this.props}/>)}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Refresh
