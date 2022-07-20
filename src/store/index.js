import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { carReducer } from "./carReducer";
import { cityReducer } from "./cityReducer";
const rootReducer=combineReducers({
    carReducer,
    cityReducer,
    authReducer
})
export const store=createStore(rootReducer)
