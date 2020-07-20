import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { AppLayout } from '../AppLayout';
import { NotFound } from '../NotFound';

export const AuthRoute: FC = () => {
  return (
    <Switch>
      <Redirect exact from="/signin" to="/home" />
      <Redirect exact from="/signup" to="/home" />
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={AppLayout} />
      <Route component={NotFound} />
    </Switch>
  );
};
