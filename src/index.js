/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import combinedReducers from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(combinedReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store ={store}>
  <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();


    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()