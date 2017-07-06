import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Pages from './pages';


export default function routes() {
  return (
    <Switch>
      <Route exact path={'/index'} component={Pages.Home} />
      <Route exact path={'/dashboard/history'} component={Pages.Dashboard.History} />
    </Switch>
  );
}
