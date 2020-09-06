import axios, { AxiosResponse } from 'axios';

import { createGetApiUrl } from '../utils';
import { CreateUserRequest, CreateUserResponse } from './types';

const USERS_URL = 'users';
const getApiUrl = createGetApiUrl(USERS_URL);

export class UsersApi {
  async createUser(
    credentials: CreateUserRequest,
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return axios.post<CreateUserResponse>(getApiUrl(), credentials);
  }
}

export const usersApi = new UsersApi();
