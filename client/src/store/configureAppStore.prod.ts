import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import { history } from '../app/history';
import { rootReducer } from './rootReducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function configureAppStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware(history)),
  });
}

const store = configureAppStore();

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export default store;
