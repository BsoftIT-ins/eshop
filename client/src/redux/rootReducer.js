import { combineReducers } from "redux";
import shopReducer from "./shop/shopReduce";


// Create Rood Reducer
const rootReducer = combineReducers({
    Shop: shopReducer,
});


//Export Rood Reducer
export default rootReducer;
