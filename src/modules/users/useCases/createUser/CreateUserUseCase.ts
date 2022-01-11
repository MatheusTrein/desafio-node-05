import { ErrorHelper } from "../../../../helpers/ErrorHelper";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new ErrorHelper({ status: 400, message: "User already exists" });
    } else {
      const user = this.usersRepository.create({ email, name });
      return user;
    }
  }
}

export { CreateUserUseCase };
