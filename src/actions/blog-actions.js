import {
    LOADING_BLOG,
    FETCH_BLOGS,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
    FETCH_BLOGS_BY_QUERY_SUCCESS,
    FETCH_BLOG_BY_QUERY_SUCCESS,
    FETCH_BLOGS_BY_STATUS_SUCCESS,
    DELETE_BLOG
} from "../action-types/blog-action-types";

export const loadingBlog = () => ({
    type: LOADING_BLOG
});

export const getBlogs = (blogs) => ({
    type: FETCH_BLOGS,
    payload: blogs
});

export const fetchBlogsByQuerySuccess = (blogs) => ({
    type: FETCH_BLOGS_BY_QUERY_SUCCESS,
    payload: blogs
});

export const fetchBlogByQuerySuccess = (blog) => ({
    type: FETCH_BLOG_BY_QUERY_SUCCESS,
    payload: blog
});

export const fetchBlogSuccess = (blog)=> ({
    type: FETCH_BLOG_SUCCESS,
    payload: blog
});

export const fetchBlogsByStatusSuccess = (blogs) => ({
    type: FETCH_BLOGS_BY_STATUS_SUCCESS,
    payload: blogs
});


export const fetchBlogsByFilterParamsSuccess = (blogs) => ({
    type: FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
    payload: blogs
});

export const deleteBlogSuccess = (id) =>({
    type: DELETE_BLOG,
    payload : id
});