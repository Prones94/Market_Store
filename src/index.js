import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// REDUX ============================================
import { Provider } from 'react-redux';
// Provider is the parent of everything and get access to everything within the store
import store from './redux/store';
// ==================================================
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
