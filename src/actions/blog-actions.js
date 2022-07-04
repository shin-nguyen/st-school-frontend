import {
  LOADING_BLOG,
  FETCH_BLOGS,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
  FETCH_BLOGS_BY_QUERY_SUCCESS,
  FETCH_BLOG_BY_QUERY_SUCCESS,
  FETCH_BLOGS_BY_STATUS_SUCCESS,
  DELETE_BLOG,
  UPDATE_BLOG,
  ADD_BLOG_SUCCESS,
  RESET_BLOG,
  ADD_BLOG_LIST_SUCCESS,
  GET_TOP_NEW_BLOG,
  GET_TOP_NEW_BLOG_FAIL,
  GET_TOP_VIEW,
  GET_TOP_VIEW_FAIL,
} from "../action-types/blog-action-types";

export const loadingBlog = () => ({
  type: LOADING_BLOG,
});

export const resetBlogSuccess = () => ({
  type: RESET_BLOG,
});

export const getBlogs = (blogs) => ({
  type: FETCH_BLOGS,
  payload: blogs,
});

export const fetchBlogsByQuerySuccess = (blogs) => ({
  type: FETCH_BLOGS_BY_QUERY_SUCCESS,
  payload: blogs,
});

export const fetchBlogByQuerySuccess = (blog) => ({
  type: FETCH_BLOG_BY_QUERY_SUCCESS,
  payload: blog,
});

export const fetchBlogSuccess = (blog) => ({
  type: FETCH_BLOG_SUCCESS,
  payload: blog,
});

export const fetchBlogsByStatusSuccess = (blogs) => ({
  type: FETCH_BLOGS_BY_STATUS_SUCCESS,
  payload: blogs,
});

export const fetchBlogsByFilterParamsSuccess = (blogs) => ({
  type: FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
  payload: blogs,
});

export const deleteBlogSuccess = (id) => ({
  type: DELETE_BLOG,
  payload: id,
});

export const updateBlogSuccess = (blog) => ({
  type: UPDATE_BLOG,
  payload: blog,
});

export const addBlogSuccess = (blog) => ({
  type: ADD_BLOG_SUCCESS,
  payload: blog,
});

export const addBlogListSuccess = (blogs) => ({
  type: ADD_BLOG_LIST_SUCCESS,
  payload: blogs,
});

export const getTopNewSuccess = (data) => ({
  type: GET_TOP_NEW_BLOG,
  payload: data
});

export const getTopNewFail = (data) => ({
  type: GET_TOP_NEW_BLOG_FAIL,
  payload: data
});

export const getTopViewSuccess = (data) => ({
  type: GET_TOP_VIEW,
  payload: data
});

export const getTopViewFail = (data) => ({
  type: GET_TOP_VIEW_FAIL,
  payload: data
});
