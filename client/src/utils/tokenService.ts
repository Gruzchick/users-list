const TOKEN_KEY = 'token';

export class tokenService {
  static getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  static setToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  static resetToken(): void {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
