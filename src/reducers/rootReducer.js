import courseReducer from "./courseReducer";
import sectionReducer from "./sectionReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    course: courseReducer,
    section: sectionReducer,
    order: orderReducer,
    admin: adminReducer,
})

export default rootReducer;