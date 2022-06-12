import requestService from "./request-service";
import { toastSuccess, toastError } from "../utils/utils";

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
    deleteCourseFail,
    getTopHotSuccess,
    getTopHotFail,
    getTopNewSuccess,
    getTopNewFail
}
    from '../actions/course-actions'

export const getAllCourse = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/admin/list`);
        dispatch(fetchCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(fetchCourseFail(error.message));
    }
}

export const getAllCourseByMe = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/list`, true);
        dispatch(fetchCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(fetchCourseFail(error.message));
    }
}

export const getPurchasedCourses = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/list/purchased`, true);
        dispatch(getPurchasedCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(getPurchasedCourseFail(error.message));
    }
}

export const getCourseById = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/${courseId}`);
        dispatch(getCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(getCourseFail(error.message));
    }
}

export const resetCourse = () => async (dispatch) => {
    try {
        dispatch(resetCourseSuccess());
    } catch (error) {
        toastError(error.message);
        dispatch(resetCourseFail(error.message));
    }
}

export const addCourse = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/course/add`, params, true, "multipart/form-data");
        dispatch(addCourseSuccess(data));
        toastSuccess("Save Success");
    } catch (error) {
        toastError(error.message);
        dispatch(addCourseFail(error.message));
    }
}

export const updateCourse = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.put(`/course/update`, params);
        toastSuccess("Update Success");
        dispatch(updateCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(updateCourseFail(error.message));
    }
}

export const deleteCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.delete(`/course/${courseId}`);
        toastSuccess("Delete Success");
        dispatch(deleteCourseSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(deleteCourseFail(error.message));
    }
};

export const getTopHot = (isLoggedIn) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/top-hot`, isLoggedIn);
        dispatch(getTopHotSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(getTopHotFail(error.message));
    }
}

export const getTopNew = (isLoggedIn) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/course/top-new`, isLoggedIn);
        dispatch(getTopNewSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(getTopNewFail(error.message));
    }
}
