import { Http } from "@config";

import type {
  GetUserRequest,
  GetUserResponse,
  GetUsersResponse,
} from "../types";

export interface IUserRepository {
  getUser: ({ id }: GetUserRequest) => Promise<GetUserResponse>;
  getUsers: () => Promise<GetUsersResponse>;
}
export default class UserRepository extends Http implements IUserRepository {
  async getUser(body: GetUserRequest): Promise<GetUserResponse> {
    return await this.request({
      endpointUrl: `/users/${body.id}`,
      method: "GET",
    });
  }

  async getUsers(): Promise<GetUsersResponse> {
    return await this.request({
      endpointUrl: "/users",
      method: "GET",
    });
  }
}
