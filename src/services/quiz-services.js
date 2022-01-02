import {
  getQuizzes,
  fetchQuizzesByQuerySuccess,
  fetchQuizByQuerySuccess,
  fetchQuizzesByFilterParamsSuccess,
  fetchQuizSuccess,
  fetchQuizzesByStatusSuccess,
  loadingQuiz,
  deleteQuizSuccess,
  updateQuizSuccess,
  addQuizSuccess,
  resetQuizSuccess,
  addQuizListSuccess,
  deleteQuestionInQuizSuccess,
  updateQuestionInQuizSuccess,
  // addQuizFail
} from "../actions/quiz-action";

//   import {
//     getAllQuizzesByQuery,
//     getQuizByQuery,
//     getAllQuizzesByMe,
//   } from "../utils/graphql-query/blog-query.js";
import RequestService from "../services/request-service";

export const fetchQuizzes = () => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.get("/quizzes");
  dispatch(getQuizzes(response.data));
};

export const resetQuiz = () => async (dispatch) => {
  try {
    dispatch(resetQuizSuccess());
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchQuiz = (id) => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.get("/quizzes/" + id);
  dispatch(fetchQuizSuccess(response.data));
};

export const updateQuiz = (params) => async (dispatch) => {
  dispatch(loadingQuiz());
  const { data } = await RequestService.put(`/quizzes/edit`, params, true);
  dispatch(updateQuizSuccess(data));
};

// export const updateQuestionInQuiz = (params, id) => async (dispatch) => {
//   dispatch(loadingQuiz());
//   const { data } = await RequestService.put(
//     `/quizzes/${id}/edit`,
//     params,
//     true
//   );
//   dispatch(updateQuestionInQuizSuccess(data));
// };

export const fetchQuizzesByFilterParams = (filter) => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.post("/quizzes/search", filter);
  dispatch(fetchQuizzesByFilterParamsSuccess(response.data));
};

export const fetchQuizzesByStatus = (gender) => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.post("/quizzes/search/status", gender);
  dispatch(fetchQuizzesByStatusSuccess(response.data));
};

// GraphQL thunks
// export const fetchQuizzesByQuery = (data) => async (dispatch) => {
//   dispatch(loadingQuiz());
//   console.log(typeof data);
//   const response = await RequestService.post("/quizzes/graphql/quizzes", {
//     query: getAllQuizzesByQuery(data),
//   });
//   dispatch(fetchQuizzesByQuerySuccess(response.data.data.quizzes));
// };

// // GraphQL thunks
// export const fetchQuizzesByMe = (data) => async (dispatch) => {
//   dispatch(loadingQuiz());
//   const response = await RequestService.post(
//     "/quizzes/graphql/quizzes/me",
//     { query: getAllQuizzesByMe(data) },
//     true
//   );
//   dispatch(fetchQuizzesByQuerySuccess(response.data.data.quizzesOfMe));
// };

// export const fetchQuizByQuery = (id) => async (dispatch) => {
//   dispatch(loadingQuiz());
//   const response = await RequestService.post("/quizzes/graphql/blog", {
//     query: getQuizByQuery(id),
//   });
//   dispatch(fetchQuizByQuerySuccess(response.data.data.blog));
// };

export const deleteQuiz = (id) => async (dispatch) => {
  const response = await RequestService.delete("/quizzes/delete/" + id, true);
  dispatch(deleteQuizSuccess(response.data));
};

export const deleteQuestionInQuiz = (id) => async (dispatch) => {
  dispatch(deleteQuestionInQuizSuccess(id));
};

export const updateQuizStatus = (id, history) => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.put(
    "/quizzes/" + id + "/status",
    null,
    true
  );
  dispatch(updateQuizSuccess(response.data));
  history.push("/admin/quizzes");
};

export const addQuiz = (params, history) => async (dispatch) => {
  try {
    const { data } = await RequestService.post(`/quizzes/add`, params, true);
    await dispatch(addQuizSuccess(data));
    history.push(`/admin/quizzes/${data.id}}/edit`);
  } catch (error) {
    // dispatch(addQuizFail(error.message));
    console.log(error.message);
  }
};

export const addQuizByExcel = (params, history) => async (dispatch) => {
  try {
    dispatch(loadingQuiz());
    const response = await RequestService.post(
      `/quizzes/add/file`,
      params,
      true
    );
    await dispatch(addQuizListSuccess(response.data));
    history.push("/admin/quizzes");
  } catch (error) {
    // dispatch(addQuizFail(error.message));
    console.log(error.message);
  }
};
