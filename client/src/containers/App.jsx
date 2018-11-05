import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router-dom';

import routes from '../routes';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
