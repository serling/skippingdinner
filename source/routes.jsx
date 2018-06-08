import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import People from './pages/people';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/people" component={People} />
  </Switch>
);

export default Routes;
