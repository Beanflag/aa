import React, { Component ,Fragment} from 'react'
import {connect} from 'react-redux'
import Head from '../components/Head';
import Select from '../data/Select.json'
 class Home extends Component {
    render() {
        return <Fragment>
                <div className="home_wrapper">
                     <Head/>
                     <div className="price">
                         <img src='./imgs/1.jpg' alt="加载失败"/>
                     </div>
                     <ol className="home_list" >
                         {Select.map((el,i)=><li key={i} style={{background:el.c}} onClick={()=>{this.Istem(el.type)}}>{el.name}</li>)}
                     </ol>
                </div>
        </Fragment>
    }
    Istem = (v)=>{
       this.props.history.push(`/ti/${v}`)
    }
}
export default connect((state)=>{
    return {
       
    }
},(dispatch)=>{
    return {
        
    }
})(Home)
