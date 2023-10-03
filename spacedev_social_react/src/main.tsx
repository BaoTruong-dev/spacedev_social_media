import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { queryClient } from "./store/queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
