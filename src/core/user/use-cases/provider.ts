import UserInteractor from "./interactor";
import UserRepository from "./repository";

export default function userInteractorProvider() {
  const userRepository = new UserRepository();
  const userInteractor = new UserInteractor(userRepository);
  return userInteractor;
}
