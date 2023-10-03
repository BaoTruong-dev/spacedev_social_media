import { useRoutes } from "react-router-dom";
import "./assets/tailwind.css";
import { routes } from "./routes";
import { DarkModeProvider } from "./components/DarkModeProvider";
import { AuthProvider } from "./components/AuthProvider";
import { useIsFetching, useIsMutating } from "react-query";

function App() {
  const element = useRoutes(routes);


  return (
    <DarkModeProvider>
      <AuthProvider>{element}</AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
