import Home from '../views/home'
import Details from '../views/details'
import List from '../views/list'

const router = {
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'home',
            component:Home,
            children:[
                {
                    path:'/home/list',
                    name:'list',
                    component:List
                }
            ]
        },{
            path:'/details',
            name:'details',
            component:Details
        }
    ]
}

export default router;