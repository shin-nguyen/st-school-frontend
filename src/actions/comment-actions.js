import {
    LOADING_COMMENT,
    FETCH_COMMENTS,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENTS_BY_QUERY_SUCCESS,
    FETCH_COMMENT_BY_QUERY_SUCCESS,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    ADD_COMMENT_SUCCESS,
    // ADD_COMMENT_FAIL
} from "../action-types/comment-action-types";

export const loadingComment = () => ({
    type: LOADING_COMMENT
});

export const getComments = (comments) => ({
    type: FETCH_COMMENTS,
    payload: comments
});

export const fetchCommentsByQuerySuccess = (comments) => ({
    type: FETCH_COMMENTS_BY_QUERY_SUCCESS,
    payload: comments
});

export const fetchCommentByQuerySuccess = (comment) => ({
    type: FETCH_COMMENT_BY_QUERY_SUCCESS,
    payload: comment
});

export const fetchCommentSuccess = (comment) => ({
    type: FETCH_COMMENT_SUCCESS,
    payload: comment
});


export const deleteCommentSuccess = (id) => ({
    type: DELETE_COMMENT,
    payload: id
});

export const updateCommentSuccess = (comment) => ({
    type: UPDATE_COMMENT,
    payload: comment
});

export const addCommentSuccess = (comment) => ({
    type: ADD_COMMENT_SUCCESS,
    payload: comment
});

// export const addCommentFail = (comment) => ({
//     type: ADD_COMMENT_FAIL,
//     payload: comment
// });
// export const deleteCommentFail = (data) => ({
//     type: ADD_COMMENT_FAIL,
//     payload: data
// });