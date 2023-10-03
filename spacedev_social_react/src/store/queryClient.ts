import { QueryClient, useQueries, useQuery } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
interface GlobalType {
  LOGIN_MODAL: boolean;
}

export const setGlobalState = <T extends keyof GlobalType>(
  name: T,
  value: Required<GlobalType[T]>
) => {
  queryClient.setQueryData([name], value);
};

const getGlobalState = <T extends keyof GlobalType>(name: T) => {
  return queryClient.getQueryData([name]) as Required<GlobalType[T]>;
};

export const useGlobalState = <T extends keyof GlobalType>(name: T) => {
  const { data } = useQuery([name], () => {
    const value = getGlobalState(name);
    return value;
  });
  return data;
};
