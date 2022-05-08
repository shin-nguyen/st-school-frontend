import requestService from "./request-service";
import { toastSuccess, toastError } from "../utils/utils";

import {
    fetchOrderSuccess, 
    fetchOrderFail,
    getOrderByCourseAndUserSuccess,
    getOrderByCourseAndUserFail,
    getOrderByUserSuccess,
    getOrderByUserFail,
    addOrderSuccess, 
    addOrderFail, 
    deleteOrderSuccess, 
    deleteOrderFail} 
from '../actions/order-actions'

export const getAllOrder  = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/order/list`);
        dispatch(fetchOrderSuccess(data));
    } catch (error) {
        dispatch(fetchOrderFail(error.message));
        toastError(error.message);
    }
}

export const getOrderByCourseAndUser  = (courseId) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/order/by-course-and-user/${courseId}`, true);
        dispatch(getOrderByCourseAndUserSuccess(data));
    } catch (error) {
        dispatch(getOrderByCourseAndUserFail(error.message));
        toastError(error.message);
    }
}

export const getOrderByUser  = () => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/order/by-user`, true);
        dispatch(getOrderByUserSuccess(data));
    } catch (error) {
        dispatch(getOrderByUserFail(error.message));
        toastError(error.message);
    }
}

export const addOrder = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/order/add`, params, true);
        dispatch(addOrderSuccess(data));
        toastSuccess("Save Success");
    } catch (error) {
        dispatch(addOrderFail(error.message));
        toastError(error.message);
    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/order/${orderId}`);
      dispatch(deleteOrderSuccess(data));
      toastSuccess("Delete Success");
    } catch (error) {
      dispatch(deleteOrderFail(error.message));
      toastError(error.message);
    }
  };

export const updateProgress = (params) => async () => {
    try {
        await requestService.put(`/order/progress`, params, true);
    } catch (error) {
        toastError(error.message);
    }
}