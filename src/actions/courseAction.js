import axios from "axios";
import {BASE_URL} from '../constants/SystemConstants';
// import { axiosClient } from '../services/config.service'

export const getAllCourse  = () => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/course/list`);
        dispatch({ type: "GET_ALL_COURSE", payload: data });
    } catch (error) {
        dispatch({ type: "GET_ALL_COURSE_FAIL", payload: error.message });
        console.log(error.message);
    }
}

export const getCourseById  = (courseId) => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/course/${courseId}`);
        dispatch({ type: "GET_COURSE_BY_ID", payload: data });
    } catch (error) {
        dispatch({ type: "GET_COURSE_BY_ID_FAIL", payload: error.message });
        console.log(error.message);
    }
}

export const addCourse = (params) => async (dispatch) => {
    try {
      //   const {
      //     userSignin: { userInfo },
      //   } = getState();
        const { data } = await axios.post(BASE_URL + `/course/add`
          , params
          // {
          //   headers: {
          //     Authorization: `Bearer ${userInfo.token}`,
          //   },
          // }
        );
        dispatch({ type: "ADD_COURSE", payload: data });
    } catch (error) {
        dispatch({ type: "ADD_COURSE_FAIL", payload: error.message });
        console.log(error.message)
    }
}

export const updateCourse = (params) => async (dispatch) => {
  try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.put(BASE_URL + `/course/update`, params
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "UPDATE_COURSE", payload: data });
  } catch (error) {
      dispatch({ type: "UPDATE_COURSE_FAIL", payload: error.message });
      console.log(error.message)
  }
}

export const deleteCourse = (courseId) => async (dispatch, getState) => {
    try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.delete(BASE_URL + `/course/${courseId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "DELETE_COURSE", payload: data });
    } catch (error) {
      dispatch({ type: "DELETE_COURSE_FAIL", payload: error.message });
      console.log(error.message);
    }
  };
