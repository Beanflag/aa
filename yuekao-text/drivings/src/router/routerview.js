import React,{Fragment} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom';
function RouterView (props){
    let {routes} = props;
    let routesarr = routes && routes.filter(el=>!el.redirect)
    let routesredirect = routes && routes.filter(el=>el.redirect).map((el,i)=><Redirect key={el+i} from={el.path} to={el.redirect} />)
    return <Fragment>
        <Switch>
        {
            routesarr.map((el,i)=><Route key={i} path={el.path} render={(props)=>{
                if(el.children){
                    return <el.component child={el.children} {...props}></el.component>
                }else{
                    return <el.component  {...props}></el.component>
                }
            }}/>).concat(routesredirect)
        }
        </Switch>
        </Fragment>
   
}

export default RouterView