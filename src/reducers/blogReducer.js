import { findIndex } from "../utils/utils"

import {
    LOADING_BLOG,
    FETCH_BLOGS,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
    FETCH_BLOGS_BY_QUERY_SUCCESS,
    FETCH_BLOG_BY_QUERY_SUCCESS,
    DELETE_BLOG,
    UPDATE_BLOG,
    ADD_BLOG_SUCCESS,
    RESET_BLOG
} from "../action-types/blog-action-types";


const initialState = {
    blogs: [],
    blog: {},
    isBlogLoading: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING_BLOG:
            return {...state, isBlogLoading: true};

        case FETCH_BLOGS:
            return {...state, blogs: action.payload, isBlogLoading: false};

        case FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS:
            return {...state, blogs: action.payload, isBlogLoading: false};

        case FETCH_BLOG_SUCCESS:
            return {...state, blog: action.payload , isBlogLoading: false};

        case FETCH_BLOG_BY_QUERY_SUCCESS:
            return {...state, blog: action.payload, isBlogLoading: false};

        case FETCH_BLOGS_BY_QUERY_SUCCESS:
            return {...state, blogs: action.payload, isBlogLoading: false};
        case DELETE_BLOG:{
                console.log(action.payload);
                const newList = [...state.blogs].filter((item) => item.id !== action.payload);
                console.log(newList);
                return {...state, blogs: newList,isBlogLoading: false}
            }   
        case ADD_BLOG_SUCCESS:{
                const newList = [...state.blogs];
                newList.push(action.payload);
                return {...state, blogs: newList};
        }
        case UPDATE_BLOG:{
                const index = findIndex(state.blogs, action.payload.id)
                const newList = [...state.blogs];
                newList[index] = action.payload;
                return {...state, blogs: newList};
        }
        case RESET_BLOG:{
            return {...state, blog: null}
        }
        default:
            return state;
    }
};

export default reducer;
