import {
  getCommentsSuccess,
  getCommentsFail,
  addCommentSuccess,
  addCommentFail,
  updateCommentSuccess,
  updateCommentFail,
  deleteCommentSuccess,
  deleteCommentFail
} from "../actions/comment-actions";

import requestService from "./request-service";
import { toastSuccess, toastError } from "../utils/utils";

export const getCommentOfBlog = (id) => async (dispatch) => {
  try {
      const { data } = await requestService.get(`/comments/blog/${id}`);
      dispatch(getCommentsSuccess(data));
  } catch (error) {
      // toastError(error.message);
      dispatch(getCommentsFail(error.message));
  }
}

export const getCommentOfCourse = (id) => async (dispatch) => {
  try {
      const { data } = await requestService.get(`/comments/course/${id}`);
      dispatch(getCommentsSuccess(data));
  } catch (error) {
      // toastError(error.message);
      dispatch(getCommentsFail(error.message));
  }
}

export const addComment = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.post(`/comments/add`, params, true);
      dispatch(addCommentSuccess(data));
  } catch (error) {
      toastError(error.message);
      dispatch(addCommentFail(error.message));
  }
}

export const updateComment = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/comments/update`, params);
      toastSuccess("Update Success");
      dispatch(updateCommentSuccess(data));
  } catch (error) {
      toastError(error.message);
      dispatch(updateCommentFail(error.message));
  }
}

export const deleteComment = (id) => async (dispatch) => {
  try {
      const { data } = await requestService.delete(`/comments/${id}`);
      toastSuccess("Delete Success");
      dispatch(deleteCommentSuccess(data));
  } catch (error) {
      toastError(error.message);
      dispatch(deleteCommentFail(error.message));
  }
};

