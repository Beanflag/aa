import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import Head from '../components/Head';
import axios from 'axios'
 class Ti extends Component {
     constructor(){
         super()
         this.state = {
             ind:0,
            isTrue:[]
         }
     }
    componentDidMount(){
         let {type} = this.props.match.params
         this.props.add(type)
    }
    render() {
        let {ind,isTrue} = this.state;
        let {arr} = this.props.arr;
        if(!arr.length){
            return <div>loading...</div>
        }
        let num = this.props.arr.arr.length
        return <Fragment>
             <Head/>
            <div className="froms">
               {arr[ind].list.map(el=><div key={el.id} className="overs">
                   <p>{ind+1}:{el.question}</p>
                   <div className="opts">
                       {
                           el.questionArr.map((ele,i)=><span 
                            key={i} 
                            onClick={()=>{this.setIstrue(el.id,el.isTrue,ele)}}
                            className={el.flag ? (isTrue[i].flag?'istrue':'error') :''}
                            >{this.isabcd(i)}:{ele}</span>
                        )}
                   </div>
               </div>)}
               <div className="fpos">
                    <button onClick={this.prev}>上一题</button>
                    <button onClick={() => {this.props.collection(arr[ind].list)}}>收藏</button>
                    <button onClick={()=>{this.next(num)}}>下一题</button>
                    <button onClick={()=>{this.collec(num)}}>去收藏</button>
               </div>
               <div className="counts">{ind+1}/{num}</div>
        </div>
        </Fragment>
    }
    setIstrue = (id,is,ele)=>{
        let {isTrue} = this.state;
        if(is===ele){
            isTrue.push({id,flag:true})
        }else{
            isTrue.push({id,flag:false})
        }

        this.setState({
            isTrue
        })
        this.props.setflag(id)
       console.log(id,is,ele)
    }
    isabcd = (v)=>{        
        switch(v){case 0:return 'A';case 1:return 'B';case 2:return 'C';case 3:return 'D';default:return "A"}
    }
    collec(){
        let {history} = this.props
        history.push('/collec')
    }
    next = (num)=>{
        let {ind} = this.state
        if(ind>=num-1){
            alert('已经是最后一题了')
            return 
        }
        this.setState({
            ind:ind+1
        })
    }
    prev = ()=>{
        let {ind} = this.state
        if(ind<=0){
            alert('已经是第一题了')
            return 
        }
        this.setState({
            ind:ind-1
        })
    }

}

export default  connect((state)=>{
    return{
       arr:state
    }
},(dispatch)=>{
    return{
       add(t){
        axios.get('/getSeq',{params:{type:t}}).then((res)=>{
            if(res.data.code){
                dispatch({
                    type:"ADDLIST",
                    payload:res.data.data
                })
            }
         })  
       },
       setflag(id){
        
       },
       collection(inds){
            console.log(inds)
            dispatch({type:"ADDS",inds})
        }
    }
})(Ti)
