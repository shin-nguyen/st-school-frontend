import courseReducer from "./courseReducer";
import videoReducer from "./videoReducer";
import orderReducer from "./orderReducer";
import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";
import adminReducer from "../reducers/adminReducer"
import blogReducer from "../reducers/blogReducer"
import commentReducer from "../reducers/commentReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    course: courseReducer,
    video: videoReducer,
    order: orderReducer,
    admin: adminReducer,
    blog: blogReducer,
    comment: commentReducer,
})

export default rootReducer;