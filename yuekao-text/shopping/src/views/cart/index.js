import React, { Component } from 'react'
import Footer from "../../component/footer"
import Header from "../../component/header"
import store from "../../store/index"
import {connect} from "react-redux"

export class Cart extends Component {
    
    render() {
        let {arr} = this.props.list
        return (
            <div className="wrap">
                <Header/>
                <main>
                    {arr.map((item,index) => <div className="cont" key={index}>
                        <div className="imgss">
                            <img src={item.url} alt=""/>
                        </div>
                        <div className="neri">
                            <h3>{item.title}</h3>
                            <p>￥{item.price}</p>
                            <div className="jian">
                                <button onClick={() => {this.props.del(item.id)}}>-</button>
                                <span>{item.num}</span>
                                <button onClick={() => {this.props.add(item.id)}}>+</button>
                            </div>
                        </div>
                    </div>)}
                    <div>总价:{store.getState().list.priceall}</div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            list:state.list
        }
    },(dispath) => {
        return {
            add(id){
                dispath({type:"ADD",id})
            },
            del(id){
                dispath({type:"DEL",id})
            }
        }
    }
)(Cart)
