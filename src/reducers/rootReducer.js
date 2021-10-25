import courseReducer from "./courseReducer";
import sectionReducer from "./sectionReducer";
import orderReducer from "./orderReducer";
import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";
import adminReducer from "../reducers/adminReducer"
import blogReducer from "../reducers/blogReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    course: courseReducer,
    section: sectionReducer,
    order: orderReducer,
    admin: adminReducer,
    blog : blogReducer,
})

export default rootReducer;