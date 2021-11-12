import RequestService from './request-service';
import {
    fetchUserSuccess,
    loadingUserInfo,
    resetInputForm,
    userUpdatedFailure,
    userUpdatedPasswordFailure,
    userUpdatedPasswordSuccess,
    userUpdatedSuccess
} from "../actions/user-actions";
import {userByQuery} from "../utils/graphql-query/users-query";

export const fetchUserInfo = () => async (dispatch) =>{
    dispatch(loadingUserInfo());
    const response = await RequestService.get("/users/info",true);
    localStorage.setItem("email",response.data.email);
    localStorage.setItem("userRole",response.data.roles);
    localStorage.setItem("isLoggedIn","true");

    dispatch(fetchUserSuccess(response.data));
}

export const updateUserInfo = (userEdit)=> async(dispatch) =>{
    try{
        console.log(userEdit);
        const response = await RequestService.put("/users/edit",userEdit,true);
        dispatch(userUpdatedSuccess(response.data));
    }
    catch(error){
        dispatch(userUpdatedFailure(error.response.data));
    }
}

export const updateUserPassword = (data) => async (dispatch) =>{
    try{
        const response  = await RequestService.put("/auth/edit/password",data,true);
        dispatch(userUpdatedPasswordSuccess(response.data));
    }
    catch(error){
        dispatch(userUpdatedPasswordFailure(error.response.data));
    }
}

export const resetForm = () => (dispatch) => {
    dispatch(resetInputForm());
};


//GraphQL
export const fetchUserInfoByQuery = (id) => async (dispatch) =>{
    dispatch(loadingUserInfo());

    const response =  await RequestService.post("/user/graphql/info",{query:userByQuery(id)},true);
    localStorage.setItem("email",response.data.data.user.email);
    localStorage.setItem("userRole",response.data.data.user.roles);
    localStorage.setItem("isLoggedIn","true");

    dispatch(fetchUserSuccess(response.data.data.user));

}