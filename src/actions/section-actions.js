import { 
    GET_SECTIONS_OF_COURSE,
    GET_SECTIONS_OF_COURSE_FAIL,
    GET_SECTION_BY_ID,
    GET_SECTION_BY_ID_FAIL,
    ADD_SECTION,
    ADD_SECTION_FAIL,
    UPDATE_SECTION,
    UPDATE_SECTION_FAIL,
    DELETE_SECTION,
    DELETE_SECTION_FAIL,
} from '../action-types/section-action-types'

export const getSectionsOfCourseSuccess = (data) => ({
    type: GET_SECTIONS_OF_COURSE,
    payload: data
});

export const getSectionsOfCourseFail = (data) => ({
    type: GET_SECTIONS_OF_COURSE_FAIL,
    payload: data
});

export const getSectionSuccess = (data) => ({
    type: GET_SECTION_BY_ID,
    payload: data
});

export const getSectionFail = (data) => ({
    type: GET_SECTION_BY_ID_FAIL,
    payload: data
});

export const addSectionSuccess = (data) => ({
    type: ADD_SECTION,
    payload: data
});

export const addSectionFail = (data) => ({
    type: ADD_SECTION_FAIL,
    payload: data
});

export const updateSectionSuccess = (data) => ({
    type: UPDATE_SECTION,
    payload: data
});

export const updateSectionFail = (data) => ({
    type: UPDATE_SECTION_FAIL,
    payload: data
});

export const deleteSectionSuccess = (data) => ({
    type: DELETE_SECTION,
    payload: data
});

export const deleteSectionFail = (data) => ({
    type: DELETE_SECTION_FAIL,
    payload: data
});