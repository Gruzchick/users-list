import jwt from 'jsonwebtoken';

interface Payload {
  userId: number;
  exp: number;
}

function isPayload(
  payload: Payload | Record<string, any> | string | null,
): payload is Payload {
  return payload !== null && payload.constructor === Object;
}

export class AccessTokenService {
  accessToken: string | null = null;
  userId: number | null = null;
  accessTokenExpirationTimestamp = 0;

  getToken(): string | null {
    return this.accessToken;
  }

  setToken(token: string): void {
    const payload = jwt.decode(token); // 'exp' measure in seconds

    if (isPayload(payload)) {
      const { exp, userId } = payload;
      this.accessToken = token;
      this.userId = userId;
      this.accessTokenExpirationTimestamp = (exp - 60) * 1000; // 60 seconds is time indent
    }
  }

  resetToken(): void {
    this.accessToken = null;
    this.userId = null;
    this.accessTokenExpirationTimestamp = 0;
  }

  isTokenNeedUpdate(): boolean {
    return Date.now() > this.accessTokenExpirationTimestamp;
  }

  getUserId(): number | null {
    return this.userId;
  }
}

export const accessTokenService = new AccessTokenService();