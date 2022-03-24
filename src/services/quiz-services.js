import {
  getQuizzes,
  fetchQuizSuccess,
  loadingQuiz,
  deleteQuizSuccess,
  updateQuizSuccess,
  addQuizSuccess,
  resetQuizSuccess,
  addQuizListSuccess,
  deleteQuestionInQuizSuccess,
  addQuestionInQuizSuccess,
  updateQuestionInQuizSuccess,
  // addQuizFail
} from "../actions/quiz-action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//   import {
//     getAllQuizzesByQuery,
//     getQuizByQuery,
//     getAllQuizzesByMe,
//   } from "../utils/graphql-query/blog-query.js";
import RequestService from "../services/request-service";

export const fetchQuizzes = () => async (dispatch) => {
  dispatch(loadingQuiz());
  const response = await RequestService.get("/quizzes/all");
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

export const addQuestionInQuiz = (id, param) => async (dispatch) => {
  try {
    const { data } = await RequestService.post(`/quizzes/${id}/question`, param, true);
    dispatch(addQuestionInQuizSuccess(data));
    toast.success("Add Success", { position: toast.POSITION.BOTTOM_RIGHT });
  } catch (error) {
    // dispatch(addCourseFail(error.message));
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "dark" });
  }
};


export const updateQuestionInQuiz = (id, question) => async (dispatch) => {
  try {
    const { data } = await RequestService.put(`/quizzes/${id}/question/edit`, question, true);
    dispatch(updateQuestionInQuizSuccess(data));
    toast.success("Update Success", { position: toast.POSITION.BOTTOM_RIGHT });
  } catch (error) {
    // dispatch(addCourseFail(error.message));
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "dark" });
  }
};

export const deleteQuestionInQuiz = (quizId, questionId) => async (dispatch) => {
  try {
    const id = await RequestService.delete(`/quizzes/${quizId}/question/${questionId}/delete`, true);
    dispatch(deleteQuestionInQuizSuccess(id));
    toast.success("Delete Success", { position: toast.POSITION.BOTTOM_RIGHT });
  } catch (error) {
    // dispatch(addCourseFail(error.message));
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "dark" });
  }
};

export const updateQuiz = (params) => async (dispatch) => {
  dispatch(loadingQuiz());
  const { data } = await RequestService.put(`/quizzes/edit`, params, true);
  dispatch(updateQuizSuccess(data));
};


export const deleteQuiz = (id) => async (dispatch) => {
  const response = await RequestService.delete("/quizzes/delete/" + id, true);
  dispatch(deleteQuizSuccess(response.data));
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
    history.push(`/admin/quizzes/${data.id}/edit`);
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
