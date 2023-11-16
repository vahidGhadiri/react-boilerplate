import { Http } from "@config";
import type { GetPostRequest, GetPostResponse } from "../types";

export interface IPostRepository {
  getPost: ({ id }: GetPostRequest) => Promise<GetPostResponse>;
}

export default class PostRepository extends Http implements IPostRepository {
  async getPost({ id }: GetPostRequest): Promise<GetPostResponse> {
    return await this.request({
      endpointUrl: `posts/${id}`,
      method: "GET",
    });
  }
}
