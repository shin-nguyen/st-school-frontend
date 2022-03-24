import { findIndex } from "../utils/utils"

import { 
    GET_REVIEWS,
    GET_REVIEWS_FAIL,
    ADD_REVIEW,
    ADD_REVIEW_FAIL,
    UPDATE_REVIEW,
    UPDATE_REVIEW_FAIL,
    DELETE_REVIEW,
    DELETE_REVIEW_FAIL
} from '../action-types/review-action-type'

const initialState ={
    listReview:[],
}
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:{
            return {...state, listReview: action.payload}
        }
        case GET_REVIEWS_FAIL:{
            return {...state, error: action.payload}
        }
        case ADD_REVIEW:{
            const newList = [...state.listReview];
            newList.push(action.payload);
            return {...state, listReview: newList};
        }
        case ADD_REVIEW_FAIL:{
            return {...state, error: action.payload}
        }
        case UPDATE_REVIEW:{
            const index = findIndex(state.listReview, action.payload.id)
            const newList = [...state.listReview];
            newList[index] = action.payload;
            return {...state, listReview: newList};
        }
        case UPDATE_REVIEW_FAIL:{
            return {...state, error: action.payload}
        }
        case DELETE_REVIEW:{
            const index = findIndex(state.listReview, action.payload)
            const newList = [...state.listReview];
            newList.splice(index, 1);
            console.log(newList);
            return {...state, listReview: newList}
        }   
        case DELETE_REVIEW_FAIL:{
            return {...state, error: action.payload}
        }
        default:
            return state   
    }
}

export default reviewReducer;