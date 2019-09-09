import React, { Component } from 'react'
import axios from "axios"
import "swiper/dist/css/swiper.css"
import Swiper from "swiper"

export default class Banner extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3000/mock/banner.json").then(res => {
            this.setState({
                list:res.data.BannerList
            },() => new Swiper(".banner2",{
                autoplay:true,
                // loop:true
            }))
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <div className="swiper-container banner2">
                    <div className="swiper-wrapper">
                        {list.map((item,index) => <div className="swiper-slide wraps" key={index}><img src={item.ImageUrl}/></div>)}
                    </div>
                </div>
            </div>
        )
    }
}
