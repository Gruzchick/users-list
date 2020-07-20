import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { SignInPage } from '../SignInPage';
import { SignUpPage } from '../SignUpPage';

export const NotAuthRoute: FC = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Redirect to="/signin" />
    </Switch>
  );
};
