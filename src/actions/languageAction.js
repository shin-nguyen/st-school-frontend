import axios from "axios";
import {BASE_URL} from '../constants/SystemConstants';
// import { axiosClient } from '../services/config.service'

export const getAllLanguage  = () => async (dispatch) => {
    try {
        const { data } = await axios.get(BASE_URL + `/language/list`);
        dispatch({ type: "GET_ALL_LANGUAGE", payload: data });
    } catch (error) {
        dispatch({ type: "GET_ALL_LANGUAGE_FAIL", payload: error.message });
    }
}