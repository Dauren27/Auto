const defaultState={
    car: '',
    favoritesCar:[],
    carName:''
  }
export const carReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'GET_CAR':
            return {...state,car: action.payload};
        case 'GET_CAR_NAME':
          return {...state,carName: action.payload}
        case 'ADD_CAR':
            return {...state,favoritesCar:[...state.favoritesCar,action.payload]};
        case 'GET_OFF_CAR':
          return {...state,favoritesCar: state.favoritesCar.filter(car=>car!=action.payload)};
      default:
        return state;
    }
  }