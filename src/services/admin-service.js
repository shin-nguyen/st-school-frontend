import {
  getAllUsers,
  getUserInfo,
  reset,
  getAllUsersByQuery,
  getUserInfoByQuery,
  loadingData,
  getDashboard,
  getOrderDashboard,
  getCustomersDashboard,
  getGraphDashboard,
} from "../actions/admin-actions";
import RequestService from "./request-service";

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/user/all", true);
  dispatch(getAllUsers(response.data));
};

export const fetchAllCustomers = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/customer/all", true);
  dispatch(getAllUsers(response.data));
};

export const fetchDashboard = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/dashboard", true);
  dispatch(getDashboard(response.data));
};

export const fetchCustomersDashboard = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/dashboard/user", true);
  dispatch(getCustomersDashboard(response.data));
};

export const fetchOrderDashboard = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get(
    "/admin/dashboard/order",
    true
  );
  console.log(response);
  dispatch(getOrderDashboard(response.data));
};

export const fetchGraphDashboard = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/dashboard/2021", true);
  dispatch(getGraphDashboard(response.data));
};

export const fetchUserInfo = (id) => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get("/admin/user/" + id, true);
  dispatch(getUserInfo(response.data));
};

export const formReset = () => async (dispatch) => {
  dispatch(reset());
};

export const fetchUserInfoByQuery = (id) => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get(
    "/admin/user",
    true
  );
  dispatch(getUserInfoByQuery(response.data));
};

export const fetchAllUsersByQuery = () => async (dispatch) => {
  dispatch(loadingData());
  const response = await RequestService.get(
    "/admin/user/all",
    true
  );
  dispatch(getAllUsersByQuery(response.data));
};
