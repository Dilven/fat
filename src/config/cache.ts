import { QueryCache } from "react-query";

const THIRTY_MINUTES = 1000 * 60 * 30;

export const cacheConfig: QueryCache['config'] = {
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: THIRTY_MINUTES,
      retry: false
    }
  }
}