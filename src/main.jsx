import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from './Router/Router';
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </ThemeProvider>
);