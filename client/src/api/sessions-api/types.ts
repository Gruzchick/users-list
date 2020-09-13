export type CreateSessionRequest = {
  email: string;
  password: string;
};

export type CreateSessionResponse = {
  accessToken: string;
  refreshToken: string;
};

export type DeleteSessionRequest = {
  refreshToken: string;
};

export type DeleteSessionResponse = undefined;
