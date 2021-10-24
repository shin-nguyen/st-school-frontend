import {
    getBlogs,
    fetchBlogsByQuerySuccess,
    fetchBlogByQuerySuccess,
    fetchBlogsByFilterParamsSuccess,
    fetchBlogSuccess,
    fetchBlogsByStatusSuccess,
    loadingBlog,
    deleteBlogSuccess
} from "../actions/blog-actions";

import {getBlogsByIdsQuery, getAllBlogsByQuery, getBlogByQuery} from "../utils/graphql-query/blog-query.js";
import RequestService from '../utils/request-service';

export const fetchBlogs = () => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.get("/blogs");
    dispatch(getBlogs(response.data));
};

export const fetchBlog = (id) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.get("/blogs/" + id);
    dispatch(fetchBlogSuccess(response.data));
};

export const fetchBlogsByIds = (ids) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/ids", ids);
    dispatch(getBlogs(response.data));
};

export const fetchBlogsByFilterParams = (filter) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/search", filter);
    dispatch(fetchBlogsByFilterParamsSuccess(response.data));
};

export const fetchBlogsByStatus = (gender) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/search/status", gender);
    dispatch(fetchBlogsByStatusSuccess(response.data));
};

export const fetchBlogReviewsWS = (response) => async (dispatch) => {
    dispatch(fetchBlogSuccess(response));
};

// GraphQL thunks
export const fetchBlogsByQuery = () => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/graphql/blogs", {query: getAllBlogsByQuery});
    dispatch(fetchBlogsByQuerySuccess(response.data.data.blogs));
};

export const fetchBlogByQuery = (id) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/graphql/blog", {query: getBlogByQuery(id)});
    dispatch(fetchBlogByQuerySuccess(response.data.data.blog));
};

export const fetchBlogsByIdsQuery = (ids) => async (dispatch) => {
    dispatch(loadingBlog());
    const response = await RequestService.post("/blogs/graphql/ids", {query: getBlogsByIdsQuery(ids)});
    dispatch(fetchBlogsByQuerySuccess(response.data.data.blogIds));
};

export const deleteBlog = (id) => async (dispatch) => {
    const response = await RequestService.delete("/blogs/delete/" + id, true);
    dispatch(deleteBlogSuccess(response.data));
};