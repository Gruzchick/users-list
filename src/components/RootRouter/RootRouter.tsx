import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { AuthRoute } from './AuthRoute';
import { NotAuthRoute } from './NotAuthRoute';

export const RootRouter: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  if (token === null) {
    return <NotAuthRoute />;
  }
  return <AuthRoute />;
};
