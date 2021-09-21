const initialState ={
    listLanguage:[]
}
const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_LANGUAGE':{
            return {...state, listLanguage: action.payload}
        }
        case 'GET_ALL_LANGUAGE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'SAVE_LANGUAGE':{
            return {...state, listLanguage: action.payload}
        }
        case 'SAVE_LANGUAGE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'UPDATE_LANGUAGE':{
            return {...state, listLanguage: action.payload}
        }
        case 'UPDATE_LANGUAGE_FAIL':{
            return {...state, error: action.payload}
        }
        case 'DELETE_LANGUAGE':{
            return {...state, listLanguage: action.payload}
        }   
        case 'DELETE_LANGUAGE_FAIL':{
            return {...state, error: action.payload}
        }
        default:
            return state   
    }
}

export default languageReducer;