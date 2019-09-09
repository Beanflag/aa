import React from 'react';
import Loadable from 'react-loadable';
const imgs = require('../logo.svg');
function loads(){
    return <div className="mask">
        <img src={imgs} className="App-logo" alt="页面加载中..." />
    </div>
}

const Home = Loadable({
    loader:()=>import('../views/home.jsx'),
    loading:loads
})

const Ti = Loadable({
    loader:()=>import('../views/ti.jsx'),
    loading:loads
})
const Sc = Loadable({
    loader:()=>import('../views/sc.jsx'),
    loading:loads
})
const Collec = Loadable({
    loader:()=>import('../views/collection.jsx'),
    loading:loads
})

const routes =[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/ti/:type',component:Ti},
    {path:'/sc',component:Sc},
    {path:'/collec',component:Collec}
]

export default routes