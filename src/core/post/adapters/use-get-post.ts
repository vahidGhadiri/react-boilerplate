import { useQuery } from "react-query";

import { ErrorResponse } from "@config";

import type { GetPostRequest, GetPostResponse } from "../types";
import { postUseCaseProvider } from "../use-cases";
import { AdapterOptionType } from "src/global";
import { GET_POST } from "../constants";

const useGetPost = (
  { id }: GetPostRequest,
  options: AdapterOptionType<GetPostResponse>
) => {
  return useQuery<GetPostResponse, ErrorResponse>(
    [GET_POST, id].filter(Boolean),
    () => postUseCaseProvider().getPost({ id }),
    { ...options }
  );
};

export default useGetPost;
