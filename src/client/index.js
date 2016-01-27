import 'babel-core/register';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

import "../../styles/index.css";


const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');
console.log(`suck it:`);
console.log(routes);
ReactDOM.render(
  <Provider store={store}>
        <ReduxRouter>
          <Router children={routes} history={history} />
        </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  var devtools = require('../server/devtools');
  devtools.default(store);
}