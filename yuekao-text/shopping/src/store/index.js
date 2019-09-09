import {createStore,combineReducers} from "redux"
import list from "./list"

let reducer = combineReducers({
    list
})

let store = createStore(reducer)
window.store = store

export default store