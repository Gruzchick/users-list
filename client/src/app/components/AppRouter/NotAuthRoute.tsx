import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { K } from '../K';

// import { SignInPage } from '../pages/SignInPage';
// import { SignUpPage } from '../pages/SignUpPage';

export const NotAuthRoute: FC = () => {
  return (
    <Switch>
      <Route>
        <K />
      </Route>
      {/*<Route exact path="/signin" component={SignInPage} />*/}
      {/*<Route exact path="/signup" component={SignUpPage} />*/}
      {/*<Redirect to="/signin" />*/}
    </Switch>
  );
};
