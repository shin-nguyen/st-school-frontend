import { findIndex } from "../utils/utils"

import { 
    GET_COMMENTS,
    GET_COMMENTS_FAIL,
    ADD_COMMENT,
    ADD_COMMENT_FAIL,
    UPDATE_COMMENT,
    UPDATE_COMMENT_FAIL,
    DELETE_COMMENT,
    DELETE_COMMENT_FAIL
  } from '../action-types/comment-action-types'


const initialState = {
    listComment: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:{
            return {...state, listComment: action.payload}
        }
        case GET_COMMENTS_FAIL:{
            return {...state, error: action.payload}
        }
        case ADD_COMMENT:{
            const newList = [...state.listComment];
            newList.push(action.payload);
            return {...state, listComment: newList};
        }
        case ADD_COMMENT_FAIL:{
            return {...state, error: action.payload}
        }
        case UPDATE_COMMENT:{
            const index = findIndex(state.listComment, action.payload.id)
            const newList = [...state.listComment];
            newList[index] = action.payload;
            return {...state, listComment: newList};
        }
        case UPDATE_COMMENT_FAIL:{
            return {...state, error: action.payload}
        }
        case DELETE_COMMENT:{
            const index = findIndex(state.listComment, action.payload)
            const newList = [...state.listComment];
            newList.splice(index, 1);
            console.log(newList);
            return {...state, listComment: newList}
        }   
        case DELETE_COMMENT_FAIL:{
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;