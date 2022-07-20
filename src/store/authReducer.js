const defaultState={
    auth: false,
}
export const authReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'CHANGE_AUTH':
            return {...state,auth:action.payload}
        default: 
            return state;
    }
}