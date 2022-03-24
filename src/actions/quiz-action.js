import {
  LOADING_QUIZ,
  FETCH_QUIZZES,
  FETCH_QUIZ_SUCCESS,
  DELETE_QUIZ,
  UPDATE_QUIZ,
  ADD_QUIZ_SUCCESS,
  RESET_QUIZ,
  ADD_QUIZ_LIST_SUCCESS,
  DELETE_QUESTION_IN_QUIZ,
  UPDATE_QUESTION_IN_QUIZ_SUCCESS,
  ADD_QUESTION_IN_QUIZ_SUCCESS,
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


export const fetchQuizSuccess = (quiz) => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: quiz,
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

export const updateQuestionInQuizSuccess = (question) => ({
  type: UPDATE_QUESTION_IN_QUIZ_SUCCESS,
  payload: question,
});

export const addQuestionInQuizSuccess = (question) => ({
  type: ADD_QUESTION_IN_QUIZ_SUCCESS,
  payload: question,
});