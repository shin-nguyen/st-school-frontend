import {
  getComments,
  fetchCommentSuccess,
  loadingComment,
  deleteCommentSuccess,
  updateCommentSuccess,
  addCommentSuccess,
} from "../actions/comment-actions";

import RequestService from "../services/request-service";

export const fetchComments = () => async (dispatch) => {
  dispatch(loadingComment());
  const response = await RequestService.get("/comments");
  dispatch(getComments(response.data));
};

export const fetchCommentById = (id) => async (dispatch) => {
  dispatch(loadingComment());
  const response = await RequestService.get("/comments/all/" + id);
  dispatch(fetchCommentSuccess(response.data));
};

export const updateComment = (params) => async (dispatch) => {
  dispatch(loadingComment());
  const { data } = await RequestService.put(`/comments/edit`, params, true);
  dispatch(updateCommentSuccess(data));
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await RequestService.delete("/comments/delete/" + id, true);
  dispatch(deleteCommentSuccess(response.data));
};

export const addComment = (params) => async (dispatch) => {
  try {
    const { data } = await RequestService.post(`/comments/add`, params, true);
    await dispatch(addCommentSuccess(data));
  } catch (error) {
    // dispatch(addCommentFail(error.message));
    console.log(error.message);
  }
};
