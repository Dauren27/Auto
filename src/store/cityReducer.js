const defaultState={
    city: '',
  }
export const cityReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'GET_CITY':
            return {...state,city: action.payload};
      default:
        return state;
    }
  }