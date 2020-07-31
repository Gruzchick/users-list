import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { history } from '../app/history';
import authReducer from './auth/reducer';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
