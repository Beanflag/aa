import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from './reducers'

let store = createStore(reducer,applyMiddleware(logger))
store.subscribe(() => {
    localStorage.setItem('todolist',JSON.stringify(store.getState().todo))
})

export default store