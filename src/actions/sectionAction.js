import axios from "axios";
import {BASE_URL} from '../constants/SystemConstants';

export const getSectionOfCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/section/list/${courseId}`);
        dispatch({ type: "GET_SECTIONS_OF_COURSE", payload: data });
    } catch (error) {
        dispatch({ type: "GET_SECTIONS_OF_COURSE_FAIL", payload: error.message });
    }
    
}

export const addSection = (params) => async (dispatch) => {
    try {
      //   const {
      //     userSignin: { userInfo },
      //   } = getState();
        const { data } = await axios.post(BASE_URL + `/section/add`
          , params
          // {
          //   headers: {
          //     Authorization: `Bearer ${userInfo.token}`,
          //   },
          // }
        );
        dispatch({ type: "ADD_SECTION", payload: data });
    } catch (error) {
        dispatch({ type: "ADD_SECTION_FAIL", payload: error.message });
        console.log(error.message)
    }
}

export const updateSection = (params) => async (dispatch) => {
  try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.put(BASE_URL + `/section/update`, params
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "UPDATE_SECTION", payload: data });
  } catch (error) {
      dispatch({ type: "UPDATE_SECTION_FAIL", payload: error.message });
      console.log(error.message)
  }
}

export const deleteSection = (id) => async (dispatch, getState) => {
    try {
    //   const {
    //     userSignin: { userInfo },
    //   } = getState();
      const { data } = await axios.delete(BASE_URL + `/section/${id}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "DELETE_SECTION", payload: data });
    } catch (error) {
      dispatch({ type: "DELETE_SECTION_FAIL", payload: error.message });
    }
};