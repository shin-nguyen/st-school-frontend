import requestService from "./request-service";

import {
    getSectionsOfCourseSuccess,
    getSectionsOfCourseFail,
    addSectionSuccess,
    addSectionFail,
    updateSectionSuccess,
    updateSectionFail,
    deleteSectionSuccess,
    deleteSectionFail
} from "../actions/section-actions"

export const getSectionOfCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/section/list/${courseId}`);
        dispatch(getSectionsOfCourseSuccess(data));
    } catch (error) {
        dispatch(getSectionsOfCourseFail(error.message));
        console.log(error.message)
    }
    
}

export const addSection = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/section/add`, params);
        dispatch(addSectionSuccess(data));
    } catch (error) {
        dispatch(addSectionFail(error.message));
        console.log(error.message)
    }
}

export const updateSection = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/section/update`, params);
      dispatch(updateSectionSuccess(data));
  } catch (error) {
      dispatch(updateSectionFail(error.message));
      console.log(error.message)
  }
}

export const deleteSection = (id) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/section/${id}`,
      );
      dispatch(deleteSectionSuccess(data));
    } catch (error) {
      dispatch(deleteSectionFail(error.message));
    }
};