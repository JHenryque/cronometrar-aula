//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppWeb from "./pages/App.tsx";
import { UserProvider } from "./service/useCronometro.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <AppWeb />
  </UserProvider>
);
