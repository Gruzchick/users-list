import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { HomePage } from '../pages/HomePage';
import { listOfAppLayoutNavItems } from '../pages/HomePage/components/HomePageNav/HomePageNav';
import { NotFoundPage } from '../pages/NotFoundPage';

const paths = listOfAppLayoutNavItems.map((item) => item.to);

export const AuthRoute: FC = () => {
  return (
    <Switch>
      <Redirect exact from="/signin" to="/home" />
      <Redirect exact from="/signup" to="/home" />
      <Redirect exact from="/" to={paths[0]} />
      <Route path={paths} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
