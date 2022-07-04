import { findIndex } from "../utils/utils";

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
  ADD_BLOG_LIST_SUCCESS,
  RESET_BLOG,
  GET_TOP_NEW_BLOG,
  GET_TOP_NEW_BLOG_FAIL,
  GET_TOP_VIEW,
  GET_TOP_VIEW_FAIL,
} from "../action-types/blog-action-types";

const initialState = {
  blogs: [],
  topView: [],
  topNewBlog: [],
  blog: {},
  isBlogLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BLOG:
      return { ...state, isBlogLoading: true };

    case FETCH_BLOGS:
      return { ...state, blogs: action.payload, isBlogLoading: false };

    case FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS:
      return { ...state, blogs: action.payload, isBlogLoading: false };

    case FETCH_BLOG_SUCCESS:
      return { ...state, blog: action.payload, isBlogLoading: false };

    case FETCH_BLOG_BY_QUERY_SUCCESS:
      return { ...state, blog: action.payload, isBlogLoading: false };

    case FETCH_BLOGS_BY_QUERY_SUCCESS:
      return { ...state, blogs: action.payload, isBlogLoading: false };
    case DELETE_BLOG: {
      const newList = [...state.blogs].filter(
        (item) => item.id !== action.payload
      );
      return { ...state, blogs: newList, isBlogLoading: false };
    }
    case ADD_BLOG_SUCCESS: {
      const newList = [...state.blogs];
      newList.push(action.payload);
      return { ...state, blogs: newList };
    }
    case UPDATE_BLOG: {
      const index = findIndex(state.blogs, action.payload.id);
      const newList = [...state.blogs];
      newList[index] = action.payload;

      return { ...state, blogs: newList, blog: action.payload };
    }

    case ADD_BLOG_LIST_SUCCESS:
      const newList = [...state.blogs];
      newList.push(action.payload);
      return { ...state, blogs: newList, isBlogLoading: false };

    case RESET_BLOG: {
      return { ...state, blog: null };
    }

    case GET_TOP_VIEW: {
      return { ...state, topView: action.payload }
    }
    case GET_TOP_VIEW_FAIL: {
      return { ...state, error: action.payload }
    }
    case GET_TOP_NEW_BLOG: {
      return { ...state, topNewBlog: action.payload }
    }
    case GET_TOP_NEW_BLOG_FAIL: {
      return { ...state, error: action.payload }
    }
    default:
      return state;
  }
};

export default reducer;
