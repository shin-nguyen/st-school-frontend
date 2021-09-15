import './index.css';
import "./assets/boxicons-2.0.9/css/boxicons.min.css"
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';


ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <App />
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
