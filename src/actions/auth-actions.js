import { ACTIVATE_ACCOUNT_FAILURE, 
    ACTIVATE_ACCOUNT_SUCCESS, 
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_SUCCESS,
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    LOGOUT_SUCCESS,
     REGISTER_FAILURE, 
     REGISTER_SUCCESS, 
     RESET_PASSWORD_CODE_FAILURE, 
     RESET_PASSWORD_CODE_SUCCESS, 
     RESET_PASSWORD_FAILURE, 
     RESET_PASSWORD_SUCCESS, 
     SHOW_LOADER } from "../action-types/auth-action-types";
     
export const loginSuccess = (userRole) => ({
    type: LOGIN_SUCCESS,
    payload: userRole
});
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});
export const showLoader = () => ({
    type: SHOW_LOADER
});
export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});
export const registerFailure = (errors) => ({
    type: REGISTER_FAILURE,
    payload: errors
});
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});
export const activateAccountSuccess = (message) => ({
    type: ACTIVATE_ACCOUNT_SUCCESS,
    payload: message
});
export const activateAccountFailure = (error) => ({
    type: ACTIVATE_ACCOUNT_FAILURE,
    payload: error
});
export const forgotPasswordSuccess = (message) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: message
});
export const forgotPasswordFailure = (error) => ({
    type: FORGOT_PASSWORD_FAILURE,
    payload: error
});
export const resetPasswordCodeSuccess = (user) => ({
    type: RESET_PASSWORD_CODE_SUCCESS,
    payload: user
});
export const resetPasswordCodeFailure = (error) => ({
    type: RESET_PASSWORD_CODE_FAILURE,
    payload: error
});
export const resetPasswordSuccess = (message) => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: message
});
export const resetPasswordFailure = (errors) => ({
    type: RESET_PASSWORD_FAILURE,
    payload: errors
});