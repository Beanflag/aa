
const defaultstate = {
    arr:[],
    list:[]
}
function ct(state=defaultstate,action){
    if(action.type==="ADDLIST"){
        const s = JSON.parse(JSON.stringify(state))
        s.arr = action.payload
        return s 
    }
    if(action.type==="SETFLAG"){
        const s = JSON.parse(JSON.stringify(state))
        s.arr.forEach((el,i)=>{
            el.list.forEach(el=>{
                if(el.id===action.payload){
                    el.flag = true
                }
            })
        })
        console.log(action.payload)
        return s 
        
    }
    if(action.type==="ADDS"){
        const s = JSON.parse(JSON.stringify(state))
        s.list.push({id:1,lis:action.inds})
        return s 
    }
    return state
}

export default  ct
