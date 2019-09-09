import {combineReducers} from 'redux'
let historyState = localStorage.getItem('todolist');
let initstate = historyState?JSON.parse(historyState):[]

function todo(state=initstate,action){
    if(action.type === "ADD_TODO"){
        
        return [...state,action.payload]
    }
    if(action.type === "DONE_TODO"){
       return [...state].map((item,index) => {
            if(action.payload === item.timestamp){
                item.done = !item.done
            }
            return item
        })
    }
    if(action.type === "DEL_TODO"){
        let arr = [...state]
        arr.splice(action.payload,1)
        return arr
     }
    return state
}
function status(state="all",action){
    if(action.type === 'CHANG_STATUS'){
        return action.payload
    }
    return state
}

export default combineReducers({
    todo,
    status
})