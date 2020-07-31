import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000/';

type R = {
  hello: string;
};

class ServerAPI {
  async hello(): Promise<AxiosResponse<R>> {
    return axios.get<R>(`${API_URL}`);
  }
}

export const serverAPI = new ServerAPI();
