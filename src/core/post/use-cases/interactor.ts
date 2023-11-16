import { GetPostRequest, GetPostResponse } from "../types";
import { IPostRepository } from "./repository";

interface IPostInteractor {
  getPost: ({ id }: GetPostRequest) => Promise<GetPostResponse>;
}

export default class PostInteractor implements IPostInteractor {
  private postRepository: IPostRepository;
  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  getPost({ id }: GetPostRequest) {
    return this.postRepository.getPost({ id });
  }
}
