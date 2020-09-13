import { AxiosResponse } from 'axios';

import { createGetApiUrl } from '../helpers';
import { httpClient } from '../http-client';
import {
  CreateSessionRequest,
  CreateSessionResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
} from './types';

const getApiUrl = createGetApiUrl('sessions');

export class SessionsApi {
  async createSession(
    credentials: CreateSessionRequest,
  ): Promise<AxiosResponse<CreateSessionResponse>> {
    return httpClient.requestWithoutAuthorization<CreateSessionResponse>({
      method: 'POST',
      url: getApiUrl(),
      data: credentials,
    });
  }
// TODO: Переносить методы из из httpclient;
// TODO: Написать логику авторизации для стора
// TODO: Реализовать на беке
// TODO: Прикрутить к компонентам
  async deleteSession(
    refreshToken: DeleteSessionRequest,
  ): Promise<AxiosResponse<DeleteSessionResponse>> {
    return httpClient.delete<DeleteSessionResponse>(getApiUrl(), refreshToken);
  }
}

export const sessionsApi = new SessionsApi();
