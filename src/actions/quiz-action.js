import {
  LOADING_QUIZ,
  FETCH_QUIZZES,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZZES_BY_FILTER_PARAMS_SUCCESS,
  FETCH_QUIZZES_BY_QUERY_SUCCESS,
  FETCH_QUIZ_BY_QUERY_SUCCESS,
  FETCH_QUIZZES_BY_STATUS_SUCCESS,
  DELETE_QUIZ,
  UPDATE_QUIZ,
  ADD_QUIZ_SUCCESS,
  RESET_QUIZ,
  ADD_QUIZ_LIST_SUCCESS,
  DELETE_QUESTION_IN_QUIZ,
  UPDATE_QUESTION_IN_QUIZ_SUCCESS,
  // ADD_QUIZ_FAIL
} from "../action-types/quiz-action-types";

export const loadingQuiz = () => ({
  type: LOADING_QUIZ,
});

export const resetQuizSuccess = () => ({
  type: RESET_QUIZ,
});

export const getQuizzes = (quizzes) => ({
  type: FETCH_QUIZZES,
  payload: quizzes,
});

export const fetchQuizzesByQuerySuccess = (quizzes) => ({
  type: FETCH_QUIZZES_BY_QUERY_SUCCESS,
  payload: quizzes,
});

export const fetchQuizByQuerySuccess = (quiz) => ({
  type: FETCH_QUIZ_BY_QUERY_SUCCESS,
  payload: quiz,
});

export const fetchQuizSuccess = (quiz) => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: quiz,
});

export const fetchQuizzesByStatusSuccess = (quizzes) => ({
  type: FETCH_QUIZZES_BY_STATUS_SUCCESS,
  payload: quizzes,
});

export const fetchQuizzesByFilterParamsSuccess = (quizzes) => ({
  type: FETCH_QUIZZES_BY_FILTER_PARAMS_SUCCESS,
  payload: quizzes,
});

export const deleteQuizSuccess = (id) => ({
  type: DELETE_QUIZ,
  payload: id,
});
export const deleteQuestionInQuizSuccess = (id) => ({
  type: DELETE_QUESTION_IN_QUIZ,
  payload: id,
});

export const updateQuizSuccess = (quiz) => ({
  type: UPDATE_QUIZ,
  payload: quiz,
});

export const addQuizSuccess = (quiz) => ({
  type: ADD_QUIZ_SUCCESS,
  payload: quiz,
});

export const addQuizListSuccess = (quizzes) => ({
  type: ADD_QUIZ_LIST_SUCCESS,
  payload: quizzes,
});

export const updateQuestionInQuizSuccess = (quiz) => ({
  type: UPDATE_QUESTION_IN_QUIZ_SUCCESS,
  payload: quiz,
});
