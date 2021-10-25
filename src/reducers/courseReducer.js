import { findIndex } from "../utils/utils"

const initialState ={
    listCourse:[],
    purchasedCourses:[],
    course: {}
}
const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_COURSE':{
            return {...state, listCourse: action.payload}
        }
        case 'FETCH_ALL_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'GET_PURCHASED_COURSE':{
            return {...state, purchasedCourses: action.payload}
        }
        case 'GET_PURCHASED_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'ADD_COURSE':{
            const newList = [...state.listCourse];
            newList.push(action.payload);
            return {...state, listCourse: newList};
        }
        case 'ADD_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'UPDATE_COURSE':{
            const index = findIndex(state.listCourse, action.payload.id)
            const newList = [...state.listCourse];
            newList[index] = action.payload;
            return {...state, listCourse: newList};
        }
        case 'UPDATE_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'DELETE_COURSE':{
            const index = findIndex(state.listCourse, action.payload)
            const newList = [...state.listCourse];
            newList.splice(index, 1);
            console.log(newList);
            return {...state, listCourse: newList}
        }   
        case 'DELETE_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'GET_COURSE_BY_ID':{
            return {...state, course: action.payload}
        }
        case 'GET_COURSE_BY_ID_FAIL':{
            return {...state, error: action.payload}
        }
        default:
            return state   
    }
}

export default courseReducer;