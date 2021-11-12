import requestService from "./request-service";

import {
    fetchCourseSuccess, 
    fetchCourseFail,
    getPurchasedCourseSuccess,
    getPurchasedCourseFail,
    getCourseSuccess, 
    getCourseFail, 
    resetCourseSuccess,
    resetCourseFail,
    addCourseSuccess, 
    addCourseFail, 
    updateCourseSuccess, 
    updateCourseFail, 
    deleteCourseSuccess, 
    deleteCourseFail} 
from '../actions/course-actions'

export const getAllCourse  = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/list`);
        dispatch(fetchCourseSuccess(data));
    } catch (error) {
        dispatch(fetchCourseFail(error.message));
        console.log(error.message);
    }
}

export const getPurchasedCourses  = () => async (dispatch) => {
  try {
      const { data } = await requestService.get(`/course/list/purchased`, true);
      dispatch(getPurchasedCourseSuccess(data));
  } catch (error) {
      dispatch(getPurchasedCourseFail(error.message));
      console.log(error.message);
  }
}

export const getCourseById  = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/${courseId}`);
        dispatch(getCourseSuccess(data));
    } catch (error) {
        dispatch(getCourseFail(error.message));
        console.log(error.message);
    }
}

export const resetCourse  = () => async (dispatch) => {
    try {
        dispatch(resetCourseSuccess());
    } catch (error) {
        dispatch(resetCourseFail(error.message));
        console.log(error.message);
    }
}

export const addCourse = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/course/add`, params,true,"multipart/form-data");
        dispatch(addCourseSuccess(data));
    } catch (error) {
        dispatch(addCourseFail(error.message));
        console.log(error.message)
    }
}

export const updateCourse = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/course/update`, params);
      dispatch(updateCourseSuccess(data));
  } catch (error) {
      dispatch(updateCourseFail(error.message));
      console.log(error.message)
  }
}

export const deleteCourse = (courseId) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/course/${courseId}`);
      dispatch(deleteCourseSuccess(data));
    } catch (error) {
      dispatch(deleteCourseFail(error.message));
      console.log(error.message);
    }
};
