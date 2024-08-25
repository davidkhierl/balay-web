export class UnauthorizedError extends Error {
  constructor(message = 'UnAuthorized') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}
