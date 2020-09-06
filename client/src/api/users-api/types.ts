export type CreateUserRequest = {
  email: string;
  password: string;
};

export type CreateUserResponse = {
  token: string;
};