import {createStore, combineReducers} from "redux";
import { sampleReducer } from "./Reducer/sampleReducer";
export const configstore=()=>{
    const store=createStore(combineReducers({sampleReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};   