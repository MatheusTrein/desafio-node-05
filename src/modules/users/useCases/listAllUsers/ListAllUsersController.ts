import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { headers } = request;

    const user_id = headers.user_id as string;

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(allUsers);
    } catch (error) {
      return response.status(error.status).json({ error });
    }
  }
}

export { ListAllUsersController };
