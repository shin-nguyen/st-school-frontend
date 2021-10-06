import courseReducer from "./courseReducer";
import languageReducer from "./languageReducer";
import sectionReducer from "./sectionReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    course: courseReducer,
    language: languageReducer,
    section: sectionReducer,
    order: orderReducer,
})

export default rootReducer;