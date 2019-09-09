import React, { Component,Fragment } from 'react'
import "./content.css"

export default class Content extends Component {
    state = {
        list:["列表一","列表二","列表三","列表四","列表五","列表六","列表七","列表八","列表九","列表十","列表十一","列表十二"],
        data:[],
        isFlag:false
    }
    change(ind,e){
        let {list} = this.state;

        let lists = list.filter((item,index) => item[index]===ind)

        console.log(lists)

        let val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            isFlag:val[ind],
            // data:
        })
    }
    render() {
        let {list,isFlag,data} = this.state
        return (
            <Fragment>
                <div className="left">
                    {list.map((item,index) => <form key={index}>
                            <input type="checkbox" onChange={this.change.bind(this,index)} checked={isFlag}/>
                            <label>{item}</label>
                        </form>)}
                    
                </div> 
                <div className="conts">
                    <div className="theleft">&gt;</div>
                    <div className="theright">&lt;</div>
                </div> 
                <div className="right">
                    <form>
                        <input type="checkbox"/>
                        <label>123</label>
                    </form>
                </div>
            </Fragment>
        )
    }
}
