import React, { Component } from 'react'
import store from '../store/'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            val:'',
            list:[]
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().list,
                val:""
            })
        })
    }
    render() {
        let {val,list} = this.state
        return (
            <div>
                <div>
                    <input type="text" value={val} onChange={(e)=>{
                        this.setState({
                            val:e.target.value
                        })
                    }}/>
                    <button onClick={()=>{
                        this.clisk()
                    }}>提交</button>
                </div>
                <ul>
                   {list.map((item,index) => <li key={index}>{item}<button onClick={() => {this.del(index)}}>删除</button></li>)}
                </ul>
            </div>
        )
    }
    clisk(){
        let {val} = this.state
        store.dispatch({type:"ADD",val})
    }
    del(ind){
        store.dispatch({type:"DEL",ind})
    }
}
