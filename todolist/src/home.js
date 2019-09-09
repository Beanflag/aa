import React, { Component } from 'react'
import Todolist from "./pages/todolist"
import {Provider} from 'react-redux'
import store from './store/todo'
function Home(props) {
    return (
        <Provider store={store}><Todolist/></Provider>
    )
}

export default Home