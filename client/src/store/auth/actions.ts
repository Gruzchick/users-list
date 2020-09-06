import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { API_URL } from '../../api/constants';
import {
  CreateUserRequest,
  CreateUserResponse,
  usersApi,
} from '../../api/users-api';

const AUTH_ACTIONS_PREFIX = 'auth';

export type serverResponseError = {
  error: string;
};

export const signUp = createAsyncThunk<
  CreateUserResponse,
  CreateUserRequest,
  { rejectValue: serverResponseError }
>(
  `${AUTH_ACTIONS_PREFIX}/signIn`,
  async (credentials: CreateUserRequest, { rejectWithValue }) => {
    try {
      const { data } = await usersApi.createUser(credentials);
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

// export const signIn = createAsyncThunk<
//   SignInResponse,
//   Credentials,
//   { rejectValue: serverResponseError }
// >(
//   `${AUTH_ACTIONS_PREFIX}/logIn`,
//   async (credentials: Credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await authAPI.signIn(credentials);
//       tokenService.setToken(data.token);
//       return data;
//     } catch (e) {
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//       const error: AxiosError<serverResponseError> = e;
//       if (!error.response) {
//         throw e;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   },
// );

// export const signOut = () => (dispatch: AppDispatch): void => {
//   tokenService.resetToken();
//   dispatch(resetToken());
// };
