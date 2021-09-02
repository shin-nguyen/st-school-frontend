import { combineReducers } from "redux";
import  customers from './customers'
import courses from './courses'

const appReducers = combineReducers({
    customers,
    courses
});

export default appReducers;