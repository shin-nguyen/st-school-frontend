import courseReducer from "./courseReducer";
import languageReducer from "./languageReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    course: courseReducer,
    language: languageReducer,
})

export default rootReducer;