import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "./assets/boxicons-2.0.9/css/boxicons.min.css"
import Layout from "./components/layout/Layout"
import { createStore } from 'redux';
import appReducers from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(
  appReducers,
  window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <Layout />
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
