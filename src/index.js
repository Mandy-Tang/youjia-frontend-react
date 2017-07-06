import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import './index.less';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    {routes()}
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
