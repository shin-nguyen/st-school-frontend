import RequestService from "../services/request-service";

import {
    activateAccountFailure,
    activateAccountSuccess,
    forgotPasswordFailure,
    forgotPasswordSuccess,
    loginFailure,
    loginSuccess,
    logoutSuccess,
    registerFailure,
    registerSuccess,
    resetPasswordCodeFailure,
    resetPasswordCodeSuccess,
    resetPasswordFailure,
    resetPasswordSuccess,
    showLoader
} from "../actions/auth-actions";

import {reset} from "../actions/admin-actions";

export const login = (userData,history) => async (dispatch) =>{
    try{
        const response = await RequestService.post("/auth/login",userData);
        console.log(response);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", response.data.userRole);
        localStorage.setItem("isLoggedIn", "true");

        dispatch(loginSuccess(response.data.userRole));
        history.push("/account");
    }
    catch(error){
        dispatch(loginFailure(error.response.data));
    }
}

export const registration = (userRegistrationData)=> async (dispatch) =>{
    try{
        dispatch(showLoader());
        await RequestService.post("/registration",userRegistrationData);
        dispatch(registerSuccess());
    }
    catch(error){
        dispatch(registerFailure(error.response.data));
    }
}

export const logout = () => async(dispatch) =>{
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    dispatch(logoutSuccess());
}

export const activateAccount = (code) =>async (dispatch) =>{
    try{
        const response = await RequestService.get("/registration/activate/"+code);
        dispatch(activateAccountSuccess(response.data));
    }
    catch(error){
        dispatch(activateAccountFailure(error.response.data));
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await RequestService.post("/auth/forgot", email);
        dispatch(forgotPasswordSuccess(response.data));
    }
    catch (error) {
        dispatch(forgotPasswordFailure(error.response.data));
    }
};

export const fetchResetPasswordCode = (code) => async (dispatch) => {
    try {
        const response = await RequestService.get("/auth/reset/" + code);
        dispatch(resetPasswordCodeSuccess(response.data));
    }
    catch (error) {
        dispatch(resetPasswordCodeFailure(error.response.data));
    }
};

export const resetPassword = (data, history) => async (dispatch) => {
    try {
        const response = await RequestService.post("/auth/reset", data);
        dispatch(resetPasswordSuccess(response.data));
        history.push("/login");
    }
    catch (error) {
        dispatch(resetPasswordFailure(error.response.data));
    }
};

export const formReset = () => async (dispatch) => {
    dispatch(reset());
};