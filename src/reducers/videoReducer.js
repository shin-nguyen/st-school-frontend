import { findIndex } from '../utils/utils'
import {
    GET_VIDEOS_OF_COURSE,
    GET_VIDEOS_OF_COURSE_FAIL,
    ADD_VIDEO,
    ADD_VIDEO_FAIL,
    UPDATE_VIDEO,
    UPDATE_VIDEO_FAIL,
    DELETE_VIDEO,
    DELETE_VIDEO_FAIL,
} from '../action-types/video-action-types'


const initialState = {
    listVideo: []
}

const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOS_OF_COURSE: {
            return { ...state, listVideo: action.payload }
        }
        case GET_VIDEOS_OF_COURSE_FAIL: {
            return { ...state, error: action.payload }
        }
        case ADD_VIDEO: {
            const newList = [...state.listVideo];
            newList.push(action.payload);
            return { ...state, listVideo: newList };
        }
        case ADD_VIDEO_FAIL: {
            return { ...state, error: action.payload }
        }
        case UPDATE_VIDEO: {
            return { ...state, listSection: action.payload }
        }
        case UPDATE_VIDEO_FAIL: {
            return { ...state, error: action.payload }
        }
        case DELETE_VIDEO: {
            const index = findIndex(state.listVideo, action.payload)
            const newList = [...state.listVideo];
            newList.splice(index, 1);
            return { ...state, listVideo: newList }
        }
        case DELETE_VIDEO_FAIL: {
            return { ...state, error: action.payload }
        }
        default:
            return state
    }
}

export default sectionReducer;