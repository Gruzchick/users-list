import { AnyAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

import { SignInResponse } from '../../api/authAPI';
import { tokenService } from '../../utils/tokenService';
import { resetToken, signIn, signUp } from './actions';

export type AuthState = {
  token: string | null;
  isFetching: boolean;
};

const AuthInitialState: AuthState = {
  token: tokenService.getToken(),
  isFetching: false,
};

const reducer = createReducer(AuthInitialState, (builder) => {
  builder.addCase(resetToken.type, (state) => {
    state.token = null;
  });
  builder.addMatcher(
    (action: AnyAction): action is PayloadAction =>
      signIn.pending.match(action) || signUp.pending.match(action),
    (state) => {
      state.isFetching = true;
    },
  );
  builder.addMatcher(
    (action: AnyAction): action is PayloadAction<SignInResponse> =>
      signIn.fulfilled.match(action) || signUp.fulfilled.match(action),
    (state, action) => {
      const { token } = action.payload;

      state.isFetching = false;
      state.token = token;
    },
  );
  builder.addMatcher(
    (action: AnyAction): action is PayloadAction =>
      signIn.rejected.match(action) || signUp.rejected.match(action),
    (state) => {
      state.isFetching = false;
    },
  );
});

export default reducer;
