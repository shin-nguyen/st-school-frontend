import {
  getReviewsSuccess,
  getReviewsFail,
  addReviewSuccess,
  addReviewFail,
} from "../actions/review-actions";

import requestService from "./request-service";
import { toastError } from "../utils/utils";

export const getReviewsOfCourse = (id) => async (dispatch) => {
  try {
    const { data } = await requestService.get(`/review/${id}`);
    dispatch(getReviewsSuccess(data));
  } catch (error) {
    // toastError(error.message);
    dispatch(getReviewsFail(error.message));
  }
}

export const addReview = (params) => async (dispatch) => {
  try {
    const { data } = await requestService.post(`/review`, params, true);
    dispatch(addReviewSuccess(data));
  } catch (error) {
    toastError(error.message);
    dispatch(addReviewFail(error.message));
  }
}


