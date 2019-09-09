
const data = {
    arr:[],
    carlist:[],
    count:0,
    priceall:0
}
const pricrall = (arr)=>{
    return arr.reduce((s,v)=>{return s+=v.price*v.num},0)
}
let list = (state=data,action) => {
    if(action.type==="ADD"){
        const s = {...state}
        let flag = s.arr.findIndex(el=>el.id===action.id);
        console.log(flag)
        if(flag!==-1){
            s.arr[flag].num++
        }else{
            s.arr.push(Object.assign(action.str,{num:1}))
        }
        s.priceall = pricrall(s.arr)
        return s
    }

    if(action.type==="DEL"){
        const s = {...state}
        let flag = s.arr.findIndex(el=>el.id===action.id);
        s.arr[flag].num--
        if(s.arr[flag].num <=0){
            s.arr.splice(flag,1)
        }
        s.priceall = pricrall(s.arr)
        return s
    }
    return state
}
export default list