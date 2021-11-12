import {
    getBlogs,
    fetchBlogsByQuerySuccess,
    fetchBlogByQuerySuccess,
    fetchBlogsByFilterParamsSuccess,
    fetchBlogSuccess,
    fetchBlogsByStatusSuccess,
    loadingBlog,
    deleteBlogSuccess,
    updateBlogSuccess,
    addBlogSuccess,
    // addBlogFail
} from "../actions/blog-actions";

import {getBlogsByIdsQuery, getAllBlogsByQuery, getBlogByQuery} from "../utils/graphql-query/blog-query.js";
import RequestService from '../services/request-service';

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

export const updateBlog = (params) => async (dispatch) => {
    dispatch(loadingBlog());
    const { data } = await RequestService.put(`/blogs/edit`, params,true);
    dispatch(updateBlogSuccess(data));
  }

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


export const addBlog = (params,history) => async (dispatch) => {
    try {
        const { data } = await RequestService.post(`/blogs/add`, params,true);
        await dispatch(addBlogSuccess(data));
        history.push("/blogs");
    } catch (error) {
        // dispatch(addBlogFail(error.message));
        console.log(error.message)
    }
}