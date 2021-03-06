import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';

export function NotAuthRoute() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Redirect to="/signin" />
    </Switch>
  );
}
