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
  resetBlogSuccess,
  addBlogListSuccess,
  getTopNewSuccess,
  getTopNewFail,
  getTopViewSuccess,
  getTopViewFail
  // addBlogFail
} from "../actions/blog-actions";
import { toastSuccess, toastError } from "../utils/utils";

import RequestService from "./request-service";

export const fetchBlogs = () => async (dispatch) => {
  dispatch(loadingBlog());
  const response = await RequestService.get("/blogs");
  dispatch(getBlogs(response.data));
};

export const resetBlog = () => async (dispatch) => {
  try {
    dispatch(resetBlogSuccess());
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBlog = (id) => async (dispatch) => {
  dispatch(loadingBlog());
  const response = await RequestService.get(`/blogs/${id}`);
  dispatch(fetchBlogSuccess(response.data));
};

export const updateBlog = (params) => async (dispatch) => {
  dispatch(loadingBlog());
  const { data } = await RequestService.put(`/blogs/edit`, params, true);
  dispatch(updateBlogSuccess(data));
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

export const fetchBlogsByQuery = (data) => async (dispatch) => {
  dispatch(loadingBlog());
  const response = await RequestService.get("/blogs");
  dispatch(fetchBlogsByQuerySuccess(response.data));
};

export const fetchBlogsByMe = (data) => async (dispatch) => {
  dispatch(loadingBlog());
  const response = await RequestService.get(
    "/blogs/me",
    true
  );
  dispatch(fetchBlogsByQuerySuccess(response.data));
};


export const deleteBlog = (id) => async (dispatch) => {
  const response = await RequestService.delete("/blogs/delete/" + id, true);
  dispatch(deleteBlogSuccess(response.data));
};

export const updateBlogStatus = (id, history) => async (dispatch) => {
  dispatch(loadingBlog());
  const response = await RequestService.put(
    "/blogs/" + id + "/status",
    null,
    true
  );
  dispatch(updateBlogSuccess(response.data));
  history.push("/admin/blogs");
};

export const addBlog = (params, history) => async (dispatch) => {
  try {
    const { data } = await RequestService.post(`/blogs/add`, params, true);
    await dispatch(addBlogSuccess(data));
    history.push("/my-blogs");
  } catch (error) {
    // dispatch(addBlogFail(error.message));
    console.log(error.message);
  }
};

export const addBlogByExcel = (params, history) => async (dispatch) => {
  try {
    dispatch(loadingBlog());
    const response = await RequestService.post(`/blogs/add/file`, params, true);
    await dispatch(addBlogListSuccess(response.data));
    history.push("/admin/blogs");
  } catch (error) {
    // dispatch(addBlogFail(error.message));
    console.log(error.message);
  }
};

export const getTopView = () => async (dispatch) => {
  try {
    const { data } = await RequestService.get(`/blogs/top-view`);
    dispatch(getTopViewSuccess(data));
  } catch (error) {
    toastError(error.message);
    dispatch(getTopViewFail(error.message));
  }
}

export const getTopNewBlog = () => async (dispatch) => {
  try {
    const { data } = await RequestService.get(`/blogs/top-new`);
    dispatch(getTopNewSuccess(data));
  } catch (error) {
    toastError(error.message);
    dispatch(getTopNewFail(error.message));
  }
}