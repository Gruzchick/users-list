import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://reqres.in/api';

export type Credentials = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};

export type SignUpResponse = {
  id: number;
  token: string;
};

class AuthAPI {
  async signUp(
    credentials: Credentials,
  ): Promise<AxiosResponse<SignUpResponse>> {
    return axios.post<SignUpResponse>(`${API_URL}/register`, credentials);
  }
  async signIn(
    credentials: Credentials,
  ): Promise<AxiosResponse<SignInResponse>> {
    return axios.post<SignInResponse>(`${API_URL}/login`, credentials);
  }
}

export const authAPI = new AuthAPI();
