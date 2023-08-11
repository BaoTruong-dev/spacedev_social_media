import { RouteObject } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages";
import { PATH } from "./constants/path";
import { Profile } from "./pages/profile";
import ChatPage from "./components/features/Chat";

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.Profile,
        element: <Profile />,
      },
    ],
  },
  {
    element: <ChatPage />,
    path: PATH.Messenger
  }
];
