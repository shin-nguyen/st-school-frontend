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

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllCourse  = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/admin/list`);
        dispatch(fetchCourseSuccess(data));
    } catch (error) {
        dispatch(fetchCourseFail(error.message));
        toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
    }
}

export const getAllCourseByMe  = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/list`, true);
        dispatch(fetchCourseSuccess(data));
    } catch (error) {
        dispatch(fetchCourseFail(error.message));
        toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
    }
}

export const getPurchasedCourses  = () => async (dispatch) => {
  try {
      const { data } = await requestService.get(`/course/list/purchased`, true);
      dispatch(getPurchasedCourseSuccess(data));
  } catch (error) {
      dispatch(getPurchasedCourseFail(error.message));
      toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
  }
}

export const getCourseById  = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/${courseId}`);
        dispatch(getCourseSuccess(data));
    } catch (error) {
        dispatch(getCourseFail(error.message));
        toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"})
    }
}

export const resetCourse  = () => async (dispatch) => {
    try {
        dispatch(resetCourseSuccess());
    } catch (error) {
        dispatch(resetCourseFail(error.message));
        toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
    }
}

export const addCourse = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/course/add`, params,true,"multipart/form-data");
        dispatch(addCourseSuccess(data));
        toast.success("Add Success", {position: toast.POSITION.BOTTOM_RIGHT});
    } catch (error) {
        dispatch(addCourseFail(error.message));
        toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
    }
}

export const updateCourse = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/course/update`, params);
      dispatch(updateCourseSuccess(data));
  } catch (error) {
      dispatch(updateCourseFail(error.message));
      toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
  }
}

export const deleteCourse = (courseId) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/course/${courseId}`);
      dispatch(deleteCourseSuccess(data));
    } catch (error) {
      dispatch(deleteCourseFail(error.message));
      toast.error(error.message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
    }
};
