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
        case 'SAVE_COURSE':{
            return {...state, listCourse: action.payload}
        }
        case 'SAVE_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'UPDATE_COURSE':{
            return {...state, listCourse: action.payload}
        }
        case 'UPDATE_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'DELETE_COURSE':{
            return {...state, listCourse: action.payload}
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