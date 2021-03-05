import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

// REDUX ============================================
import { Provider } from 'react-redux';
// Provider is the parent of everything and get access to everything within the store
import {store, persistor } from './redux/store';
// ==================================================
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
