import { QueryClient, QueryClientProvider } from "react-query";
import type { FC, PropsWithChildren, ReactNode } from "react";

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

type QueryClientProvider = {
  children: ReactNode;
};

const QueryProvider: FC<QueryClientProvider> = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);

export default QueryProvider;
