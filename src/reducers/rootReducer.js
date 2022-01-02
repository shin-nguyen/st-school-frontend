import courseReducer from "./courseReducer";
import videoReducer from "./videoReducer";
import orderReducer from "./orderReducer";
import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";
import adminReducer from "../reducers/adminReducer";
import blogReducer from "../reducers/blogReducer";
import commentReducer from "../reducers/commentReducer";
import quizReducer from "../reducers/quiz-reducer";
import recordReducer from "../reducers/record-reducer";
import commentCourseReducer from "../reducers/comment-course-reducer";
import { combineReducers } from "redux";
import ThemeReducer from "./themeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  course: courseReducer,
  video: videoReducer,
  order: orderReducer,
  admin: adminReducer,
  blog: blogReducer,
  comment: commentReducer,
  theme: ThemeReducer,
  commentCourse: commentCourseReducer,
  quiz: quizReducer,
  record: recordReducer,
});

export default rootReducer;
