import React from 'react';
import 'react-app-polyfill/stable';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import configureStore from './store/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
