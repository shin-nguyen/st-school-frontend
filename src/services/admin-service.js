import {
    getAllUsers,
    getUserInfo,
    reset,
    getAllUsersByQuery,
    getUserInfoByQuery,
    loadingData,
} from "../actions/admin-actions";
import RequestService from './request-service';
import {userByQuery, usersByQuery} from "../utils/graphql-query/users-query";


export const fetchAllUsers = () => async (dispatch) => {
    dispatch(loadingData());
    const response = await RequestService.get("/admin/user/all", true);
    dispatch(getAllUsers(response.data));
};

export const fetchAllCustomers = () => async (dispatch) => {
    dispatch(loadingData());
    const response = await RequestService.get("/admin/customer/all", false);
    dispatch(getAllUsers(response.data));
};

export const fetchUserInfo = (id) => async (dispatch) => {
    dispatch(loadingData());
    const response = await RequestService.get("/admin/user/" + id, true);
    dispatch(getUserInfo(response.data));
};

export const formReset = () => async (dispatch) => {
    dispatch(reset());
};

//GraphQL thunks
export const fetchUserInfoByQuery = (id) => async (dispatch) => {
    dispatch(loadingData());
    const response = await RequestService.post("/admin/graphql/user", {query: userByQuery(id)}, true);
    dispatch(getUserInfoByQuery(response.data.data.user));
};

export const fetchAllUsersByQuery = () => async (dispatch) => {
    dispatch(loadingData());
    const response = await RequestService.post("/admin/graphql/user/all", {query: usersByQuery}, true);
    dispatch(getAllUsersByQuery(response.data.data.users));
};
