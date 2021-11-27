import { LOADING_USER_INFO,
    FETCH_USER_SUCCESS,
    RESET_INPUT_FORM,
    USER_UPDATED_FAILURE,
    USER_UPDATED_PASSWORD_FAILURE,
    USER_UPDATED_PASSWORD_SUCCESS,
    USER_UPDATED_SUCCESS,
    FETCH_USER_BY_QUERY_SUCCESS,
    USER_IMAGE_UPDATED_SUCCESS
} from '../action-types/user-actions-types' 

export const loadingUserInfo = () => ({
    type: LOADING_USER_INFO
});
export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});
export const userUpdatedSuccess = (user) => ({
    type: USER_UPDATED_SUCCESS,
    payload: user
});
////
export const addUserImageSuccess = (user) => ({
    type: USER_IMAGE_UPDATED_SUCCESS,
    payload: user
});

export const userUpdatedFailure = (errors) => ({
    type: USER_UPDATED_FAILURE,
    payload: errors
});
export const userUpdatedPasswordSuccess = (message) => ({
    type: USER_UPDATED_PASSWORD_SUCCESS,
    payload: message
});
export const userUpdatedPasswordFailure = (errors) => ({
    type: USER_UPDATED_PASSWORD_FAILURE,
    payload: errors
});
export const resetInputForm = () => ({
    type: RESET_INPUT_FORM,
});
export const fetchUserByQuerySuccess = (user) => ({
    type: FETCH_USER_BY_QUERY_SUCCESS,
    payload: user
});