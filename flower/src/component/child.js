import React, { Component } from 'react'

export default class Child extends Component {
    state={
        data:["123","456","789"]
    }
    render() {
        let {list,change} = this.props
        let {data} = this.state
        // console.log(change)
        return (
            <div>
                {list.map((item,index) => <div key={index} onClick={()=>{
                    change(data)
                }}>{item}</div>)}
            </div>
        )
    }
}
