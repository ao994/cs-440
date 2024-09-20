import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home";


import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);