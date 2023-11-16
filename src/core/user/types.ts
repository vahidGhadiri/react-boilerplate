import { IUser } from "./entities";

export type GetUserResponse = IUser;
export type GetUserRequest = {
  id: number;
};

export type GetUsersResponse = IUser[];
