import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
interface GlobalType {
  LOGIN_MODAL?: boolean;
}

const setGlobalState = <T extends keyof GlobalType>(
  name: T,
  value: Required<GlobalType>
) => {};
// setGlobalState("LOGIN_MODAL", undefined);
