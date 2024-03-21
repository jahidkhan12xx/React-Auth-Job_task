import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Users from "../components/pages/Users/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default Router;
