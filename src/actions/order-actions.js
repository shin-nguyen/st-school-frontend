import { 
    FETCH_ALL_ORDER,
    FETCH_ALL_ORDER_FAIL,
    GET_ORDER_BY_USER,
    GET_ORDER_BY_USER_FAIL,
    GET_ORDER_BY_ID,
    GET_ORDER_BY_ID_FAIL,
    ADD_ORDER,
    ADD_ORDER_FAIL,
    UPDATE_ORDER,
    UPDATE_ORDER_FAIL,
    DELETE_ORDER,
    DELETE_ORDER_FAIL,
    GET_ORDER_BY_COURSE_AND_USER,
    GET_ORDER_BY_COURSE_AND_USER_FAIL
} from '../action-types/order-action-types'

export const fetchOrderSuccess = (data) => ({
    type: FETCH_ALL_ORDER,
    payload: data
});

export const fetchOrderFail = (data) => ({
    type: FETCH_ALL_ORDER_FAIL,
    payload: data
});

export const getOrderSuccess = (data) => ({
    type: GET_ORDER_BY_ID,
    payload: data
});

export const getOrderFail = (data) => ({
    type: GET_ORDER_BY_ID_FAIL,
    payload: data
});

export const getOrderByUserSuccess = (data) => ({
    type: GET_ORDER_BY_USER,
    payload: data
});

export const getOrderByUserFail = (data) => ({
    type: GET_ORDER_BY_USER_FAIL,
    payload: data
});

export const getOrderByCourseAndUserSuccess = (data) => ({
    type: GET_ORDER_BY_COURSE_AND_USER,
    payload: data
});

export const getOrderByCourseAndUserFail = (data) => ({
    type: GET_ORDER_BY_COURSE_AND_USER_FAIL,
    payload: data
});

export const addOrderSuccess = (data) => ({
    type: ADD_ORDER,
    payload: data
});

export const addOrderFail = (data) => ({
    type: ADD_ORDER_FAIL,
    payload: data
});

export const updateOrderSuccess = (data) => ({
    type: UPDATE_ORDER,
    payload: data
});

export const updateOrderFail = (data) => ({
    type: UPDATE_ORDER_FAIL,
    payload: data
});

export const deleteOrderSuccess = (data) => ({
    type: DELETE_ORDER,
    payload: data
});

export const deleteOrderFail = (data) => ({
    type: DELETE_ORDER_FAIL,
    payload: data
});