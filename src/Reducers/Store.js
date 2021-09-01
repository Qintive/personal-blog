import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import LessonsReducer from './LessonsReducer'

let reducers = combineReducers ({
    lessonsPage: LessonsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store

export default store