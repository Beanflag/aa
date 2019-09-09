import React, { Component } from 'react'
import {connect} from "react-redux"

export class Collection extends Component {
    render() {
        console.log(this.props.list)
        let str = this.props.list
        return (
            <div>
                {str.map((item,index) => {
                   return item.lis.map((el,i) => <div className="froms" key={i}>
    
                   <p>{el.question}</p>
                   <div className="opts">
                           {el.questionArr.map((ele,i)=><span 
                           key={i} 
                           >{this.isabcd(i)}:{ele}</span>
                       )}
                   </div>
               </div>)
                })}
            </div>
        )
    }
    isabcd = (v)=>{        
        switch(v){case 0:return 'A';case 1:return 'B';case 2:return 'C';case 3:return 'D';default:return "A"}
    }
}

export default connect(
    (state) => {
        return {
            list:state.list
        }
    },(dispatch) => {
        return {

        }
    }
)(Collection)