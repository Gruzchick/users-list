export class UnauthorizedHttpClientError extends Error {
  constructor() {
    super();
    this.name = 'UnauthorizedHttpClientError';
  }
}
