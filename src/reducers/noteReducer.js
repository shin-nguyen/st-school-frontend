import { findIndex } from "../utils/utils"

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

const initialState ={
    listNote:[],
}
const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:{
            return {...state, listNote: action.payload}
        }
        case GET_NOTES_FAIL:{
            return {...state, error: action.payload}
        }
        case ADD_NOTE:{
            const newList = [...state.listNote];
            newList.push(action.payload);
            return {...state, listNote: newList};
        }
        case ADD_NOTE_FAIL:{
            return {...state, error: action.payload}
        }
        case UPDATE_NOTE:{
            const index = findIndex(state.listNote, action.payload.id)
            const newList = [...state.listNote];
            newList[index] = action.payload;
            return {...state, listNote: newList};
        }
        case UPDATE_NOTE_FAIL:{
            return {...state, error: action.payload}
        }
        case DELETE_NOTE:{
            const index = findIndex(state.listNote, action.payload)
            const newList = [...state.listNote];
            newList.splice(index, 1);
            console.log(newList);
            return {...state, listNote: newList}
        }   
        case DELETE_NOTE_FAIL:{
            return {...state, error: action.payload}
        }
        default:
            return state   
    }
}

export default noteReducer;