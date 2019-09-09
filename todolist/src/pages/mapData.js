let mapState = (state) => {
    let {status,todo} = state
    let todolist = [...todo]
    if(status === 'active'){
        todolist = todo.filter(item => item.done === false)
    } else if(status === 'completed'){
        todolist = todo.filter(item => item.done === true)
    }
    return {
        todo:todolist,
        status:status
    }
}

function actionCreator(type,payload){
    return {
        type,
        payload
    }
}

let mapDispatch = (dispatch) => {
    return {
        addItem(payload){
            dispatch(actionCreator("ADD_TODO",payload))
        },
        checked(idx){
            dispatch({
                type:"DONE_TODO",
                payload:idx
            })
         },
         delItem(idx){
             dispatch({
                type:"DEL_TODO",
                payload:idx
             })
         },
         changeStatus(payload){
             dispatch({
                 type:"CHANG_STATUS",
                 payload
             })
         }
    }
}

export {mapState,mapDispatch}