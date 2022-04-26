import { 
    GET_NOTES,
    GET_NOTES_FAIL,
    ADD_NOTE,
    ADD_NOTE_FAIL,
    UPDATE_NOTE,
    UPDATE_NOTE_FAIL,
    DELETE_NOTE,
    DELETE_NOTE_FAIL
  } from '../action-types/note-action-type'
  
  export const getNotesSuccess = (data) => ({
    type: GET_NOTES,
    payload: data
  });
  
  export const getNotesFail = (data) => ({
    type: GET_NOTES_FAIL,
    payload: data
  });
  
  export const addNoteSuccess = (data) => ({
    type: ADD_NOTE,
    payload: data
  });
  
  export const addNoteFail = (data) => ({
    type: ADD_NOTE_FAIL,
    payload: data
  });
  
  export const updateNoteSuccess = (data) => ({
    type: UPDATE_NOTE,
    payload: data
  });
  
  export const updateNoteFail = (data) => ({
    type: UPDATE_NOTE_FAIL,
    payload: data
  });
  
  export const deleteNoteSuccess = (data) => ({
    type: DELETE_NOTE,
    payload: data
  });
  
  export const deleteNoteFail = (data) => ({
    type: DELETE_NOTE_FAIL,
    payload: data
  });