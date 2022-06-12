import { LOGOUT_SUCCESS } from "../action-types/auth-action-types";
import {
    FETCH_USER_SUCCESS,
    USER_UPDATED_FAILURE,
    USER_UPDATED_PASSWORD_FAILURE,
    USER_UPDATED_PASSWORD_SUCCESS,
    USER_UPDATED_SUCCESS,
    RESET_INPUT_FORM,
    FETCH_USER_BY_QUERY_SUCCESS,
    LOADING_USER_INFO,
    USER_IMAGE_UPDATED_SUCCESS,
    CHECK_NEWBIE
} from "../action-types/user-actions-types";

const initialState = {
    user :{},
    isLoggedIn : false,
    isLoaded: false,
    isNewbie:false,
    successMessage:"",
    userEditErrors :{},
    userResetPasswordErrors:{},
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHECK_NEWBIE:
            return {...state, isNewbie: action.payload}

        case LOADING_USER_INFO:
            return {...state, isLoaded: true}

        case FETCH_USER_SUCCESS:
            return {...state, user: action.payload, isLoggedIn: true, isLoaded: false}

        case USER_UPDATED_SUCCESS:
            return {...state, user: action.payload, userEditErrors: {}};

        case USER_UPDATED_FAILURE:
            return {...state, userEditErrors: action.payload};

        case USER_UPDATED_PASSWORD_SUCCESS:
            return {...state, successMessage: action.payload, userResetPasswordErrors: {}};

        case USER_UPDATED_PASSWORD_FAILURE:
            return {...state, userResetPasswordErrors: action.payload};

        case RESET_INPUT_FORM:
            return {...state, userResetPasswordErrors: {}, successMessage: "", userEditErrors: {}, reviewErrors: {}};

        case LOGOUT_SUCCESS:
            return {...state, user: {}, isLoggedIn: false}

        case FETCH_USER_BY_QUERY_SUCCESS:
            return {...state, user: action.payload, isLoggedIn: true, isLoaded: false}

        case USER_IMAGE_UPDATED_SUCCESS:{
            return {...state, user: action.payload, isLoaded: false}
        }
        default:
            return state;
    }
};

export default reducer;

