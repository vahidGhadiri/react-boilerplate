import { userUseCaseProvider } from "../use-cases";
import { useQuery } from "react-query";

import { ErrorResponse } from "@config";

import type { GetUsersResponse } from "../types";
import { AdapterOptionType } from "src/global";
import { GET_USERS } from "../constants";

const useGetUsers = (options?: AdapterOptionType<GetUsersResponse>) => {
  return useQuery<GetUsersResponse, ErrorResponse>(
    [GET_USERS],
    () => userUseCaseProvider().getUsers(),
    { ...options }
  );
};

export default useGetUsers;
