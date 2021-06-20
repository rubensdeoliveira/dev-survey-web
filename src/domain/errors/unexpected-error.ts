export class UnexpectedError extends Error {
  constructor() {
    super('Algo de errado acontenceu, tente novamente')
    this.name = 'UnexpectedError'
  }
}
