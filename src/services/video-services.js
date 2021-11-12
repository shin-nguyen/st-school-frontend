import requestService from "./request-service";

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
        console.log(error.message)
    }
    
}

export const addVideo = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/video/add`, params);
        dispatch(addVideoSuccess(data));
    } catch (error) {
        dispatch(addVideoFail(error.message));
        console.log(error.message)
    }
}

export const updateVideo = (params) => async (dispatch) => {
  try {
      const { data } = await requestService.put(`/video/update`, params);
      dispatch(updateVideoSuccess(data));
  } catch (error) {
      dispatch(updateVideoFail(error.message));
      console.log(error.message)
  }
}

export const deleteVideo = (id) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/video/${id}`,
      );
      dispatch(deleteVideoSuccess(data));
    } catch (error) {
      dispatch(deleteVideoFail(error.message));
    }
};