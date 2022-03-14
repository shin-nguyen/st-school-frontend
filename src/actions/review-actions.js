import { 
    GET_REVIEWS,
    GET_REVIEWS_FAIL,
    ADD_REVIEW,
    ADD_REVIEW_FAIL,
    UPDATE_REVIEW,
    UPDATE_REVIEW_FAIL,
    DELETE_REVIEW,
    DELETE_REVIEW_FAIL
  } from '../action-types/review-action-type'
  
  export const getReviewsSuccess = (data) => ({
    type: GET_REVIEWS,
    payload: data
  });
  
  export const getReviewsFail = (data) => ({
    type: GET_REVIEWS_FAIL,
    payload: data
  });
  
  export const addReviewSuccess = (data) => ({
    type: ADD_REVIEW,
    payload: data
  });
  
  export const addReviewFail = (data) => ({
    type: ADD_REVIEW_FAIL,
    payload: data
  });
  
  export const updateReviewSuccess = (data) => ({
    type: UPDATE_REVIEW,
    payload: data
  });
  
  export const updateReviewFail = (data) => ({
    type: UPDATE_REVIEW_FAIL,
    payload: data
  });
  
  export const deleteReviewSuccess = (data) => ({
    type: DELETE_REVIEW,
    payload: data
  });
  
  export const deleteReviewFail = (data) => ({
    type: DELETE_REVIEW_FAIL,
    payload: data
  });