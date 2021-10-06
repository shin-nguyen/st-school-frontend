import axios from "axios";
import {BASE_URL} from '../constants/SystemConstants';
// import { axiosClient } from '../services/config.service'

export const getAllOrder  = () => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/order/list`);
        dispatch({ type: "GET_ALL_ORDER", payload: data });
    } catch (error) {
        dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error.message });
    }
}

export const getOrderById  = (courseId) => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/order/${courseId}`);
        dispatch({ type: "GET_ORDER_BY_ID", payload: data });
    } catch (error) {
        dispatch({ type: "GET_ORDER_BY_ID_FAIL", payload: error.message });
    }
}

export const addOrder = (params) => async (dispatch) => {
    try {
      //   const {
      //     userSignin: { userInfo },
      //   } = getState();
        const { data } = await axios.post(BASE_URL + `/order/add`
          , params
          // {
          //   headers: {
          //     Authorization: `Bearer ${userInfo.token}`,
          //   },
          // }
        );
        console.log("add order");
        console.log(params);
        dispatch({ type: "ADD_ORDER", payload: data });
    } catch (error) {
        dispatch({ type: "ADD_ORDER_FAIL", payload: error.message });
        console.log(error.message)
    }
}

export const updateOrder = (params) => async (dispatch) => {
  try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.put(BASE_URL + `/order/update`, params
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "UPDATE_ORDER", payload: data });
  } catch (error) {
      dispatch({ type: "UPDATE_ORDER_FAIL", payload: error.message });
      console.log(error.message)
  }
}

export const deleteOrder = (courseId) => async (dispatch, getState) => {
    try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.delete(BASE_URL + `/order/${courseId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "DELETE_ORDER", payload: data });
    } catch (error) {
      dispatch({ type: "DELETE_ORDER_FAIL", payload: error.message });
    }
  };