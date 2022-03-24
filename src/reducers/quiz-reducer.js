import { findIndex } from "../utils/utils";

import {
  LOADING_QUIZ,
  RESET_QUIZ,
  FETCH_QUIZZES,
  FETCH_QUIZ_SUCCESS,
  DELETE_QUIZ,
  UPDATE_QUIZ,
  ADD_QUIZ_SUCCESS,
  ADD_QUIZ_LIST_SUCCESS,
  DELETE_QUESTION_IN_QUIZ,
  ADD_QUESTION_IN_QUIZ_SUCCESS,
  UPDATE_QUESTION_IN_QUIZ_SUCCESS
} from "../action-types/quiz-action-types";

const initialState = {
  quizzes: [],
  quiz: {},
  isQuizLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_QUIZ:
      return { ...state, isQuizLoading: true };

    case FETCH_QUIZZES:
      return { ...state, quizzes: action.payload, isQuizLoading: false };

    case FETCH_QUIZ_SUCCESS:
      return { ...state, quiz: action.payload, isQuizLoading: false };

    case DELETE_QUIZ: {
      console.log(action.payload);
      const newList = [...state.quizzes].filter(
        (item) => item.id !== action.payload
      );
      console.log(newList);
      return { ...state, quizzes: newList, isQuizLoading: false };
    }

    case ADD_QUESTION_IN_QUIZ_SUCCESS: {
      return { ...state, quiz: action.payload, isQuizLoading: false };
    }

    case UPDATE_QUESTION_IN_QUIZ_SUCCESS: {
      return { ...state, quiz: action.payload, isQuizLoading: false };
    }

    case DELETE_QUESTION_IN_QUIZ: {
      const newList = [...state.quiz.question].filter(
        (item) => item.id !== action.payload
      );
      return { ...state, quiz: { question: newList }, isQuizLoading: false };
    }

    case ADD_QUIZ_SUCCESS: {
      const newList = [...state.quizzes];
      newList.push(action.payload);
      return { ...state, quizzes: newList };
    }
    case UPDATE_QUIZ: {
      const index = findIndex(state.quizzes, action.payload.id);
      const newList = [...state.quizzes];
      newList[index] = action.payload;
      return { ...state, quizzes: newList };
    }

    case ADD_QUIZ_LIST_SUCCESS: {
      const newList = [...state.quizzes];
      newList.push(action.payload);
      return { ...state, quizzes: newList, isQuizLoading: false };
    }

    case RESET_QUIZ: {
      return { ...state, quiz: null };
    }
    default:
      return state;
  }
};

export default reducer;
