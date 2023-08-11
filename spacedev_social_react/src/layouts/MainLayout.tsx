import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { FloatingChat } from "../components/features/FloatingChat";
import { useAuth } from "../components/AuthProvider";

export const MainLayout = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {user && <FloatingChat />}
    </>
  );
};
