import React from "react";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Theme } from "./Theme/Theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
