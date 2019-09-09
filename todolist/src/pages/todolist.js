import React, { Component } from 'react'
import "./todolist.css"
import {connect} from 'react-redux'
import {mapState,mapDispatch} from "./mapData"
 class Todolist extends Component {
     state = {
        todoitem:"",
        globalIndex:-1
     }
     handleChange(e){
         let val = e.target.value
         this.setState((state) => {
             state.todoitem = val
             return state
         })
     }
     add(){
         
         this.props.addItem({todo:this.state.todoitem,done:false, timestamp: new Date().getTime()})
         this.setState((state) => {
            state.todoitem = ''
            return state
        })
     }
    render() {
        let {status, changeStatus, checked, delItem} = this.props
        return (
            <div>
                <h3>Todolist</h3>
                <div>
                    <input type="text" onKeyDown={(e)=>e.keyCode == 13&&this.add()} value={this.state.todoitem} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.add.bind(this)}>添加</button>
                </div>
                <ul className="shows">
                        {
                            this.props.todo.map((item,index) => (
                                <li key={index}>
                                    <span className={item.done ? "checkbox checked" : "checkbox"} onClick={()=>{checked(item.timestamp)}}></span>
                                    <span className={item.done?'linethrough':""}>{item.todo}</span>
                                    <span className="del" onClick={() => {delItem(index)}}>X</span>
                                </li>
                            ))
                        }

                </ul>
                <div className="show">
                    show:
                    <span className={status==='all' ? 'active':""} onClick={()=>{changeStatus('all')}}>all</span>
                    <span className={status==='active' ? 'active':""} onClick={()=>{changeStatus('active')}}>active</span>
                    <span className={status==='completed' ? 'active':""} onClick={()=>{changeStatus('completed')}}>completed</span>
                </div>
            </div>
        )
    }
}

export default connect(mapState,mapDispatch)(Todolist)