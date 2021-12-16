import {
  LOADING_COMMENT,
  FETCH_COMMENT_SUCCESS,
  ADD_COMMENT_SUCCESS,
} from "../action-types/comment-course-action-types";

const initialState = {
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_COMMENT:
      return { ...state };
    case FETCH_COMMENT_SUCCESS:
      return { ...state, comments: action.payload };
    case ADD_COMMENT_SUCCESS:
      const newList = [...state.comments];
      newList.push(action.payload);
      return { ...state, comments: newList };
    default:
      return state;
  }
};

export default reducer;
