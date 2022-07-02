import RequestService from './request-service';
import {
    fetchUserSuccess,
    loadingUserInfo,
    resetInputForm,
    userUpdatedFailure,
    userUpdatedPasswordFailure,
    userUpdatedPasswordSuccess,
    userUpdatedSuccess,
    addUserImageSuccess,
    checkIsNewbie
} from "../actions/user-actions";

export const fetchUserInfo = () => async (dispatch) => {
    dispatch(loadingUserInfo());
    const response = await RequestService.get("/users/info", true);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("userRole", response.data.roles);
    localStorage.setItem("isLoggedIn", "true");

    dispatch(fetchUserSuccess(response.data));
}

export const updateUserInfo = (userEdit) => async (dispatch) => {
    try {
        const response = await RequestService.put("/users/edit", userEdit, true);
        dispatch(userUpdatedSuccess(response.data));
    }
    catch (error) {
        dispatch(userUpdatedFailure(error.response.data));
    }
}

export const addUserImage = (params) => async (dispatch) => {
    try {
        const { data } = await RequestService.post(`/users/add-image`, params, true);
        await dispatch(addUserImageSuccess(data));
    } catch (error) {
        // dispatch(addBlogFail(error.message));
    }
}
export const updateUserPassword = (data) => async (dispatch) => {
    try {
        const response = await RequestService.put("/auth/edit/password", data, true);
        dispatch(userUpdatedPasswordSuccess(response.data));
    }
    catch (error) {
        dispatch(userUpdatedPasswordFailure(error.response.data));
    }
}

export const resetForm = () => (dispatch) => {
    dispatch(resetInputForm());
};



export const isNewbie = () => async (dispatch) => {
    const response = await RequestService.get("/users/is-newbie", true);
    dispatch(checkIsNewbie(response.data));
}