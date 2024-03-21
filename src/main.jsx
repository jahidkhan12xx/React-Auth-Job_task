import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.jsx";
import ContextProvider from "./ContextProvider/ContextProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Router} />
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </ContextProvider>
  </React.StrictMode>
);
