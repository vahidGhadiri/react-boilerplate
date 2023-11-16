import PostInteractor from "./interactor";
import PostRepository from "./repository";

export default function postInteractorProvider() {
  const postRepository = new PostRepository();
  const postInteractor = new PostInteractor(postRepository);
  return postInteractor;
}
