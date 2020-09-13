import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { accessTokenService, refreshTokenService } from '../../helpers';
import {
  GetCurrentUserResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  UpdateAccessTokenResponse,
} from './types';
import { UnauthorizedHttpClientError } from './UnauthorizedHttpClientError';

class HttpClient {
  client = axios.create({ baseURL: process.env.API_URL });

  isValidationError(error: AxiosError): boolean {
    return Boolean(error && error.response && error.response.status === 422);
  }

  isUnauthorizedError(error: AxiosError): boolean {
    return Boolean(error && error.response && error.response.status === 401);
  }

  async req<T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    if (accessTokenService.isTokenNeedUpdate()) {
      await this.updateAccessToken();
    }

    const accessToken = accessTokenService.getToken();

    const requestOptions = {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken ?? ''}`,
      },
    };

    return this.client.request<T>({ ...requestOptions });
  }

  async requestWithoutAuthorization<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.client.request<T>({ ...options });
  }

  async updateAccessToken(): Promise<void> {
    try {
      const refreshToken = refreshTokenService.getToken();
      const {
        data: { accessToken },
      } = await this.client.request<UpdateAccessTokenResponse>({
        method: 'PUT',
        url: '/sessions',
        data: { refreshToken },
      });
      accessTokenService.setToken(accessToken);
    } catch (err) {
      // FIX NOW: Согласовать ошибки с бекендом
      if (this.isValidationError(err) || this.isUnauthorizedError(err)) {
        accessTokenService.resetToken();
        refreshTokenService.resetToken();
        throw new UnauthorizedHttpClientError();
      }
    }
  }

  async signUp({
    email,
    password,
  }: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
    return this.client.request<SignUpResponse>({
      method: 'POST',
      url: '/users',
      data: { email, password },
    });
  }

  async signIn({ email, password }: SignInRequest): Promise<void> {
    const {
      data: { accessToken, refreshToken },
    } = await this.client.request<SignInResponse>({
      method: 'POST',
      url: '/sessions',
      data: { email, password },
    });
    accessTokenService.setToken(accessToken);
    refreshTokenService.setToken(refreshToken);
  }

  async singOut(): Promise<void> {
    const refreshToken = refreshTokenService.getToken();
    try {
      await this.req({
        method: 'DELETE',
        url: '/sessions',
        data: { refreshToken },
      });
    } catch (e) {
      // Ignore error
    } finally {
      accessTokenService.resetToken();
      refreshTokenService.resetToken();
    }
  }

  async signOutOtherDevices(): Promise<void> {
    const refreshToken = refreshTokenService.getToken();
    await this.req({
      method: 'DELETE',
      url: '/sessions/others',
      data: { refreshToken },
    });
  }

  async getCurrentUser(): Promise<void | AxiosResponse<
    GetCurrentUserResponse
  >> {
    const userId = accessTokenService.getUserId();
    if (userId !== null) {
      return this.req<GetCurrentUserResponse>({ url: `/users/${userId}` });
    }
  }

  async post<T>(
    url: string,
    data: Record<string, string>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.req<T>({ ...config, url, data, method: 'POST' });
  }

  async put<T>(
    url: string,
    data: Record<string, string>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.req<T>({ ...config, url, data, method: 'PUT' });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.req<T>({ ...config, url, method: 'GET' });
  }

  async delete<T>(
    url: string,
    data: Record<string, string>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.req<T>({ ...config, url, data, method: 'DELETE' });
  }
}

export const httpClient = new HttpClient();
