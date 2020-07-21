import React, { FC } from 'react';
import { Route, Switch } from 'react-router';

import { listOfAppLayoutNavItems } from '../HomePageNav/HomePageNav';

export const HomePageRouter: FC = () => {
  return (
    <Switch>
      {listOfAppLayoutNavItems.map((item) => {
        const { component, to: path } = item;

        return <Route key={path} path={path} component={component} />;
      })}
    </Switch>
  );
};
