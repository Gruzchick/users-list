import axios, { AxiosResponse } from 'axios';

const API_URL = `http://localhost:${process.env.SERVER_PORT}`;

type R = {
  hello: string;
};

class ServerAPI {
  async hello(): Promise<AxiosResponse<R>> {
    return axios.get<R>(`${API_URL}/users/1`);
  }
}

export const serverAPI = new ServerAPI();
