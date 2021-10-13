import { findIndex } from "../untils/untils"

const initialState ={
    listCourse:[],
    course: {}
}
const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_COURSE':{
            return {...state, listCourse: action.payload}
        }
        case 'GET_ALL_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'ADD_COURSE':{
            const newList = [...state.listCourse];
            newList.push(action.payload);
            console.log(newList)
            return {...state, listCourse: newList};
        }
        case 'ADD_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'UPDATE_COURSE':{
            const index = findIndex(state.listCourse, action.payload.id)
            state.listCourse[index] = action.payload;
            console.log("update course")
            console.log(action.payload)
            console.log("after update");
            console.log(state.listCourse);
            return {...state};
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