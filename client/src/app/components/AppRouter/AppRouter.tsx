import React, { FC } from 'react';
import { AuthRoute } from './AuthRoute';
import { NotAuthRoute } from './NotAuthRoute';

export const AppRouter: FC = () => {
  // const { token } = useSelector((state: RootState) => state.auth);

  if (true) {
    return <NotAuthRoute />;
  }
  return <AuthRoute />;
};
