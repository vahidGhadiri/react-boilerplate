import { IUserRepository } from "./repository";
import type {
  GetUserRequest,
  GetUserResponse,
  GetUsersResponse,
} from "../types";

interface IUserInteractor {
  getUser: ({ id }: GetUserRequest) => Promise<GetUserResponse>;
  getUsers: () => Promise<GetUsersResponse>;
}

export default class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  getUser({ id }: GetUserRequest) {
    return this.userRepository.getUser({ id });
  }

  getUsers() {
    return this.userRepository.getUsers();
  }
}
