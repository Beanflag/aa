let list = (state=[],action) => {
    switch(action.type){
        case 'ADD':
            state.push(action.val);
            return [...state];
        case 'DEL':
            state.splice(action.ind,1);
            return [...state];
        default:
            return state
    }
}
export default list