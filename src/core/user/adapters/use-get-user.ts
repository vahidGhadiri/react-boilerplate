import { useQuery } from "react-query";

import { ErrorResponse } from "@config";

import { GetUserRequest, GetUserResponse } from "../types";
import { userUseCaseProvider } from "../use-cases";
import { AdapterOptionType } from "src/global";
import { GET_USER } from "../constants";

const useGetUser = (
  { id }: GetUserRequest,
  options?: AdapterOptionType<GetUserResponse>
) => {
  return useQuery<GetUserResponse, ErrorResponse>(
    [GET_USER, id].filter(Boolean),
    () => userUseCaseProvider().getUser({ id }),
    { ...options }
  );
};

export default useGetUser;
