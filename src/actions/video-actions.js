import { 
    GET_VIDEOS_OF_COURSE,
    GET_VIDEOS_OF_COURSE_FAIL,
    GET_VIDEO_BY_ID,
    GET_VIDEO_BY_ID_FAIL,
    ADD_VIDEO,
    ADD_VIDEO_FAIL,
    UPDATE_VIDEO,
    UPDATE_VIDEO_FAIL,
    DELETE_VIDEO,
    DELETE_VIDEO_FAIL,
} from '../action-types/video-action-types'

export const getVideosOfCourseSuccess = (data) => ({
    type: GET_VIDEOS_OF_COURSE,
    payload: data
});

export const getVideosOfCourseFail = (data) => ({
    type: GET_VIDEOS_OF_COURSE_FAIL,
    payload: data
});

export const getVideoSuccess = (data) => ({
    type: GET_VIDEO_BY_ID,
    payload: data
});

export const getVideoFail = (data) => ({
    type: GET_VIDEO_BY_ID_FAIL,
    payload: data
});

export const addVideoSuccess = (data) => ({
    type: ADD_VIDEO,
    payload: data
});

export const addVideoFail = (data) => ({
    type: ADD_VIDEO_FAIL,
    payload: data
});

export const updateVideoSuccess = (data) => ({
    type: UPDATE_VIDEO,
    payload: data
});

export const updateVideoFail = (data) => ({
    type: UPDATE_VIDEO_FAIL,
    payload: data
});

export const deleteVideoSuccess = (data) => ({
    type: DELETE_VIDEO,
    payload: data
});

export const deleteVideoFail = (data) => ({
    type: DELETE_VIDEO_FAIL,
    payload: data
});