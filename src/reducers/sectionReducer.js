const initialState ={
    listSection:[]
}
const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SECTIONS_OF_COURSE':{
            return {...state, listSection: action.payload}
        }
        case 'GET_SECTIONS_OF_COURSE_FAIL':{
            return {...state, error: action.payload}
        }
        // case 'SAVE_SECTION':{
        //     return {...state, listSection: action.payload}
        // }
        // case 'SAVE_SECTION_FAIL':{
        //     return {...state, error: action.payload}
        // }
        // case 'UPDATE_SECTION':{
        //     return {...state, listSection: action.payload}
        // }
        // case 'UPDATE_SECTION_FAIL':{
        //     return {...state, error: action.payload}
        // }
        // case 'DELETE_SECTION':{
        //     return {...state, listSection: action.payload}
        // }   
        // case 'DELETE_SECTION_FAIL':{
        //     return {...state, error: action.payload}
        // }
        default:
            return state   
    }
}

export default sectionReducer;