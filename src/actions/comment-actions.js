import { 
  GET_COMMENTS,
  GET_COMMENTS_FAIL,
  ADD_COMMENT,
  ADD_COMMENT_FAIL,
  UPDATE_COMMENT,
  UPDATE_COMMENT_FAIL,
  DELETE_COMMENT,
  DELETE_COMMENT_FAIL,
  REPLY_COMMENT,
  REPLY_COMMENT_FAIL
} from '../action-types/comment-action-types'

export const getCommentsSuccess = (data) => ({
  type: GET_COMMENTS,
  payload: data
});

export const getCommentsFail = (data) => ({
  type: GET_COMMENTS_FAIL,
  payload: data
});

export const addCommentSuccess = (data) => ({
  type: ADD_COMMENT,
  payload: data
});

export const addCommentFail = (data) => ({
  type: ADD_COMMENT_FAIL,
  payload: data
});

export const updateCommentSuccess = (data) => ({
  type: UPDATE_COMMENT,
  payload: data
});

export const updateCommentFail = (data) => ({
  type: UPDATE_COMMENT_FAIL,
  payload: data
});

export const deleteCommentSuccess = (data) => ({
  type: DELETE_COMMENT,
  payload: data
});

export const deleteCommentFail = (data) => ({
  type: DELETE_COMMENT_FAIL,
  payload: data
});

export const replyCommentSuccess = (data) => ({
  type: REPLY_COMMENT,
  payload: data
});

export const replyCommentFail = (data) => ({
  type: REPLY_COMMENT_FAIL,
  payload: data
});

