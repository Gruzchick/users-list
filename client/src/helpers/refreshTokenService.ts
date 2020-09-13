const REFRESH_TOKEN_KEY = 'refreshToken';

export class RefreshTokenService {
  getToken(): null | string {
    return window.localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  setToken(token: string): void {
    window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  resetToken(): void {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export const refreshTokenService = new RefreshTokenService()