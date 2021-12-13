import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/index";

const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(thunk)) ;


const store = createStore(rootReducer(),initialState, composeEnhancers);

export default store