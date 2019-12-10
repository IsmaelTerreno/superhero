import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  APP_PATH_AUTH0_CALLBACK,
  APP_PATH_ROOT
} from "./config";
import Callback from "./containers/CallbackContainer";
import Dashboard from "./containers/DashboardContainer";

const Routes = () => {
  return (
    <Switch>
        <Route
        exact
        path={APP_PATH_ROOT}
        render={() => (
            <Dashboard />
        )}
        />
        <Route
        exact
        path={APP_PATH_AUTH0_CALLBACK}
        render={() => {
            return <Callback />;
        }}
        />
    </Switch>
  );
};

export default Routes;
