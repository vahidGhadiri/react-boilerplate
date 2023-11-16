export type AdapterOptionType<ResponseType, T = ResponseType> = Omit<
  UseQueryOptions<ResponseType, ErrorResponse, T>,
  "queryKey" | "queryFn"
>;
