import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    course: courseReducer,
})

export default rootReducer;