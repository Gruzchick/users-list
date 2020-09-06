import { createReducer } from '@reduxjs/toolkit';

import { signUp } from './actions';

export type AuthState = {
  user: null | { [key: string]: any };
  isFetching: boolean;
};

const AuthInitialState: AuthState = {
  user: null,
  isFetching: false,
};

const reducer = createReducer(AuthInitialState, (builder) => {
  builder.addCase(signUp.pending, (state) => {
    state.isFetching = true;
  });
  builder.addCase(signUp.rejected, (state) => {
    state.isFetching = false;
    state.user = null;
  });
  builder.addCase(signUp.fulfilled, (state, { payload }) => {
    state.isFetching = false;
    state.user = payload;
  });
});

export default reducer;
