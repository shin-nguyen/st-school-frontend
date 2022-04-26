import {
    getNotesSuccess,
    getNotesFail,
    addNoteSuccess,
    addNoteFail,
    updateNoteSuccess,
    updateNoteFail,
    deleteNoteSuccess,
    deleteNoteFail
  } from "../actions/note-actions";
  
  import requestService from "./request-service";
  import { toastSuccess, toastError } from "../utils/utils";
  
  export const getNotes = (id) => async (dispatch) => {
    try {
        const { data } = await requestService.get(`/note/${id}`, true);
        dispatch(getNotesSuccess(data));
    } catch (error) {
        dispatch(getNotesFail(error.message));
    }
  }
  
  export const addNote = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.post(`/note`, params, true);
        dispatch(addNoteSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(addNoteFail(error.message));
    }
  }
  
  export const updateNote = (params) => async (dispatch) => {
    try {
        const { data } = await requestService.put(`/note`, params);
        toastSuccess("Update Success");
        dispatch(updateNoteSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(updateNoteFail(error.message));
    }
  }
  
  export const deleteNote = (id) => async (dispatch) => {
    try {
        const { data } = await requestService.delete(`/note/${id}`);
        toastSuccess("Delete Success");
        dispatch(deleteNoteSuccess(data));
    } catch (error) {
        toastError(error.message);
        dispatch(deleteNoteFail(error.message));
    }
  };
  
  