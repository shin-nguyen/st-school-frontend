import { 
    FETCH_ALL_COURSE,
    FETCH_ALL_COURSE_FAIL,
    GET_PURCHASED_COURSE,
    GET_PURCHASED_COURSE_FAIL,
    GET_COURSE_BY_ID,
    GET_COURSE_BY_ID_FAIL,
    RESET_COURSE,
    RESET_COURSE_FAIL,
    ADD_COURSE,
    ADD_COURSE_FAIL,
    UPDATE_COURSE,
    UPDATE_COURSE_FAIL,
    DELETE_COURSE,
    DELETE_COURSE_FAIL
} from '../action-types/course-action-types'

export const fetchCourseSuccess = (data) => ({
    type: FETCH_ALL_COURSE,
    payload: data
});

export const fetchCourseFail = (data) => ({
    type: FETCH_ALL_COURSE_FAIL,
    payload: data
});

export const getPurchasedCourseSuccess = (data) => ({
    type: GET_PURCHASED_COURSE,
    payload: data
});

export const getPurchasedCourseFail = (data) => ({
    type: GET_PURCHASED_COURSE_FAIL,
    payload: data
});

export const getCourseSuccess = (data) => ({
    type: GET_COURSE_BY_ID,
    payload: data
});

export const getCourseFail = (data) => ({
    type: GET_COURSE_BY_ID_FAIL,
    payload: data
});

export const resetCourseSuccess = () => ({
    type: RESET_COURSE
});

export const resetCourseFail = () => ({
    type: RESET_COURSE_FAIL
});

export const addCourseSuccess = (data) => ({
    type: ADD_COURSE,
    payload: data
});

export const addCourseFail = (data) => ({
    type: ADD_COURSE_FAIL,
    payload: data
});

export const updateCourseSuccess = (data) => ({
    type: UPDATE_COURSE,
    payload: data
});

export const updateCourseFail = (data) => ({
    type: UPDATE_COURSE_FAIL,
    payload: data
});

export const deleteCourseSuccess = (data) => ({
    type: DELETE_COURSE,
    payload: data
});

export const deleteCourseFail = (data) => ({
    type: DELETE_COURSE_FAIL,
    payload: data
});



