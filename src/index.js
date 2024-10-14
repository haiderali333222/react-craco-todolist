/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './App.less';
import './utility.css';
import TodoProvider from './context/TodoContext';

import App from './App';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,

  document.getElementById('root')
);
serviceWorkerRegistration.register();
