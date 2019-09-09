import { createStore,combineReducers } from 'redux'
import list from "./list-todo"

let reducer = combineReducers({
    list
})
let store = createStore(reducer,{list:[]})
window.store = store

export default store