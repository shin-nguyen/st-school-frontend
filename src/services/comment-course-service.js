import {
  getComments,
  fetchCommentSuccess,
  loadingComment,
  deleteCommentSuccess,
  updateCommentSuccess,
  addCommentSuccess,
} from "../actions/comment-course-actions ";

import RequestService from "../services/request-service";

export const fetchComments = () => async (dispatch) => {
  dispatch(loadingComment());
  const response = await RequestService.get("/comments/course");
  dispatch(getComments(response.data));
};

export const fetchCommentById = (id) => async (dispatch) => {
  dispatch(loadingComment());
  const response = await RequestService.get("/comments/course/all/" + id);
  dispatch(fetchCommentSuccess(response.data));
};

export const updateComment = (params) => async (dispatch) => {
  dispatch(loadingComment());
  const { data } = await RequestService.put(
    `/comments/course/edit`,
    params,
    true
  );
  dispatch(updateCommentSuccess(data));
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await RequestService.delete(
    "/comments/course/delete/" + id,
    true
  );
  dispatch(deleteCommentSuccess(response.data));
};

export const addComment = (params) => async (dispatch) => {
  try {
    const { data } = await RequestService.post(
      `/comments/course/add`,
      params,
      true
    );
    await dispatch(addCommentSuccess(data));
  } catch (error) {
    // dispatch(addCommentFail(error.message));
    console.log(error.message);
  }
};
