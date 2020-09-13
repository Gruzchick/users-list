import { AxiosResponse } from 'axios';

import { createGetApiUrl } from '../helpers';
import { httpClient } from '../http-client';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
} from './types';

const getApiUrl = createGetApiUrl('users');

class UsersApi {
  async createUser(
    credentials: CreateUserRequest,
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return httpClient.requestWithoutAuthorization<CreateUserResponse>({
      method: 'POST',
      url: getApiUrl(),
      data: credentials,
    });
  }

  async getUser(userId: number): Promise<AxiosResponse<GetUserResponse>> {
    return httpClient.get<GetUserResponse>(getApiUrl(userId));
  }
}

export const usersApi = new UsersApi();
