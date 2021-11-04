import requestService from "./request-service";

import {
    fetchOrderSuccess, 
    fetchOrderFail, 
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
        console.log(error.message)
    }
}

export const addOrder = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/order/add`, params, true);
        dispatch(addOrderSuccess(data));
    } catch (error) {
        dispatch(addOrderFail(error.message));
        console.log(error.message)
    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    try {
      const { data } = await requestService.delete(`/order/${orderId}`);
      dispatch(deleteOrderSuccess(data));
    } catch (error) {
      dispatch(deleteOrderFail(error.message));
      console.log(error.message)
    }
  };