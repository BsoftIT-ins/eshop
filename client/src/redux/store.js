import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension" 

// Redux Middlewares
const middlewares = [thunk];


// Create App Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
    );

//Export Store
export default store;