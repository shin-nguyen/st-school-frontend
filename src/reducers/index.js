import courseReducer from "./courseReducer";
import languageReducer from "./languageReducer";
import sectionReducer from "./sectionReducer";
import orderReducer from "./orderReducer";
import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";
import adminReducer from "../reducers/adminReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    course: courseReducer,
    language: languageReducer,
    section: sectionReducer,
    order: orderReducer,
    admin: adminReducer,
})

export default rootReducer;