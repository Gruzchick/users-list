import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  authAPI,
  Credentials,
  SignInResponse,
  SignUpResponse,
} from '../../api/authAPI';
import { tokenService } from '../../utils/tokenService';
import { AppDispatch } from '../configureAppStore.prod';

const AUTH_ACTIONS_PREFIX = 'auth';

export type serverResponseError = {
  error: string;
};

export const resetToken = createAction(`${AUTH_ACTIONS_PREFIX}/resetToken`);

export const signUp = createAsyncThunk<
  SignUpResponse,
  Credentials,
  { rejectValue: serverResponseError }
>(
  `${AUTH_ACTIONS_PREFIX}/signIn`,
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.signUp(credentials);
      tokenService.setToken(data.token);
      return data;
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const error: AxiosError<serverResponseError> = e;
      if (!error.response) {
        throw e;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const signIn = createAsyncThunk<
  SignInResponse,
  Credentials,
  { rejectValue: serverResponseError }
>(
  `${AUTH_ACTIONS_PREFIX}/logIn`,
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.signIn(credentials);
      tokenService.setToken(data.token);
      return data;
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const error: AxiosError<serverResponseError> = e;
      if (!error.response) {
        throw e;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const signOut = () => (dispatch: AppDispatch): void => {
  tokenService.resetToken();
  dispatch(resetToken());
};
