import {  
    FETCH_ALL_USERS_SUCCESS, 
    FETCH_USER_INFO_SUCCESS, 
    FORM_RESET, 
    FETCH_ALL_USERS_BY_QUERY_SUCCESS, 
    FETCH_USER_INFO_BY_QUERY_SUCCESS,  
    LOADING_DATA 
} from "../action-types/admin-action-types";
export const loadingData = () => ({
    type: LOADING_DATA
});
export const getAllUsers = (users) => ({
    type: FETCH_ALL_USERS_SUCCESS,
    payload: users
});
export const getUserInfo = (user) => ({
    type: FETCH_USER_INFO_SUCCESS,
    payload: user
});
export const reset = () => ({
    type: FORM_RESET
});
export const getUserInfoByQuery = (user) => ({
    type: FETCH_USER_INFO_BY_QUERY_SUCCESS,
    payload: user
});
export const getAllUsersByQuery = (users) => ({
    type: FETCH_ALL_USERS_BY_QUERY_SUCCESS,
    payload: users
});
