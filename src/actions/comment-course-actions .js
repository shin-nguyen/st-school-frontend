import {
  LOADING_COMMENT,
  FETCH_COMMENTS,
  FETCH_COMMENT_SUCCESS,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  ADD_COMMENT_SUCCESS,
} from "../action-types/comment-course-action-types";

export const loadingComment = () => ({
  type: LOADING_COMMENT,
});

export const getComments = (comments) => ({
  type: FETCH_COMMENTS,
  payload: comments,
});

export const fetchCommentSuccess = (comment) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: comment,
});

export const deleteCommentSuccess = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

export const updateCommentSuccess = (comment) => ({
  type: UPDATE_COMMENT,
  payload: comment,
});

export const addCommentSuccess = (comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment,
});
