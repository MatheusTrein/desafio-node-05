import { ErrorHelper } from "../../../../helpers/ErrorHelper";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new ErrorHelper({ status: 404, message: "User not found" });
    }

    const user = this.usersRepository.turnAdmin(userExists);

    return user;
  }
}

export { TurnUserAdminUseCase };
