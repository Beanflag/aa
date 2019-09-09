import React, { Component } from 'react'
import "swiper/dist/css/swiper.css"
import Swiper from "swiper"

export default class Home extends Component {
    componentDidMount(){
        new Swiper(".banner1",{
            autoplay:true,
            loop:true
        })
    }
    render() {
        let {list} = this.props
        return (
            <div className="wrapper">
                <div className="swiper-container banner1">
                    <div className="swiper-wrapper">
                        {list.map((item,index) => <div className="swiper-slide wrap" key={index}><img src={item.img}/></div>)}
                    </div>
                </div>
            </div>
        )
    }
}
