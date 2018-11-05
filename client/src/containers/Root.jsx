import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from '../state/configureStore';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <div>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </div>
  </Provider>
);

export default Root;
