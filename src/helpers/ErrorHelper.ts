interface ICreateErrorHelper {
  status: number;
  message: string;
}

class ErrorHelper {
  status: number;
  message: string;

  constructor({ status, message }: ICreateErrorHelper) {
    this.status = status;
    this.message = message;
  }
}

export { ErrorHelper };
