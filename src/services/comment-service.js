import {
    getComments,
    fetchCommentsByQuerySuccess,
    fetchCommentByQuerySuccess,
    fetchCommentSuccess,
    loadingComment,
    deleteCommentSuccess,
    updateCommentSuccess,
    addCommentSuccess,
    // addCommentFail
} from "../actions/comment-actions";

// import { getCommentsByIdsQuery, getAllCommentsByQuery, getCommentByQuery } from "../utils/graphql-query/comment-query.js";
import RequestService from '../services/request-service';

export const fetchComments = () => async(dispatch) => {
    dispatch(loadingComment());
    const response = await RequestService.get("/comments");
    dispatch(getComments(response.data));
};

export const fetchCommentById = (id) => async(dispatch) => {
    dispatch(loadingComment());
    const response = await RequestService.get("/comments/all/" + id,true);
    dispatch(fetchCommentSuccess(response.data));
};

export const fetchCommentsByIds = (ids) => async(dispatch) => {
    dispatch(loadingComment());
    const response = await RequestService.post("/comments/ids", ids);
    dispatch(getComments(response.data));
};

export const updateComment = (params) => async(dispatch) => {
    dispatch(loadingComment());
    const { data } = await RequestService.put(`/comments/edit`, params, true);
    dispatch(updateCommentSuccess(data));
}

// export const fetchCommentsByFilterParams = (filter) => async(dispatch) => {
//     dispatch(loadingComment());
//     const response = await RequestService.post("/comments/search", filter);
//     dispatch(fetchCommentsByFilterParamsSuccess(response.data));
// };

export const fetchCommentReviewsWS = (response) => async(dispatch) => {
    dispatch(fetchCommentSuccess(response));
};

// GraphQL thunks
// export const fetchCommentsByQuery = () => async(dispatch) => {
//     dispatch(loadingComment());
//     const response = await RequestService.post("/comments/graphql/comments", { query: getAllCommentsByQuery });
//     dispatch(fetchCommentsByQuerySuccess(response.data.data.comments));
// };

// export const fetchCommentByQuery = (id) => async(dispatch) => {
//     dispatch(loadingComment());
//     const response = await RequestService.post("/comments/graphql/comment", { query: getCommentByQuery(id) });
//     dispatch(fetchCommentByQuerySuccess(response.data.data.comment));
// };

// export const fetchCommentsByIdsQuery = (ids) => async(dispatch) => {
//     dispatch(loadingComment());
//     const response = await RequestService.post("/comments/graphql/ids", { query: getCommentsByIdsQuery(ids) });
//     dispatch(fetchCommentsByQuerySuccess(response.data.data.commentIds));
// };

export const deleteComment = (id) => async(dispatch) => {
    const response = await RequestService.delete("/comments/delete/" + id, true);
    dispatch(deleteCommentSuccess(response.data));
};


export const addComment = (params) => async(dispatch) => {
    try {
        const { data } = await RequestService.post(`/comments/add`, params, true);
        await dispatch(addCommentSuccess(data));
    } catch (error) {
        // dispatch(addCommentFail(error.message));
        console.log(error.message)
    }
}