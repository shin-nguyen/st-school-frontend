import {
    LOADING_COMMENT,
    FETCH_COMMENTS,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENTS_BY_QUERY_SUCCESS,
    FETCH_COMMENT_BY_QUERY_SUCCESS,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL
} from "../action-types/comment-action-types";


const initialState = {
    comments: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING_COMMENT:
            return {...state};
        case FETCH_COMMENT_SUCCESS:
            return {...state, comments: action.payload };
        case ADD_COMMENT_SUCCESS:
            const newList = [...state.comments];
            newList.push(action.payload);
            return {...state, comments: newList};
        default:
            return state;
    }
};

export default reducer;