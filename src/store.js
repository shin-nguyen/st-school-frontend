import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const initialState = {
  // userSignin: {
  //   userInfo: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : undefined,
  // },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;