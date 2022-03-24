import requestService from "./request-service";
import { toastSuccess, toastError } from "../utils/utils";

import {
    getVideosOfCourseSuccess,
    getVideosOfCourseFail,
    addVideoSuccess,
    addVideoFail,
    updateVideoSuccess,
    updateVideoFail,
    deleteVideoSuccess,
    deleteVideoFail
} from "../actions/video-actions"

export const getVideosOfCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/video/list/${courseId}`);
        dispatch(getVideosOfCourseSuccess(data));
    } catch (error) {
        dispatch(getVideosOfCourseFail(error.message));
        toastError(error.message);
    }
    
}

export const addVideo = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/video/add`, params);
        dispatch(addVideoSuccess(data));
        toastSuccess("Save Success");
    } catch (error) {
        dispatch(addVideoFail(error.message));
        toastError(error.message);
    }
}

export const updateVideo = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/video/update`, params);
      dispatch(updateVideoSuccess(data));
      toastSuccess("Update Success")
  } catch (error) {
      dispatch(updateVideoFail(error.message));
      toastError(error.message);
  }
}

export const deleteVideo = (id) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/video/${id}`,
      );
      dispatch(deleteVideoSuccess(data));
      toastSuccess("Delete Success")
    } catch (error) {
      dispatch(deleteVideoFail(error.message));
      toastError(error.message);
    }
};