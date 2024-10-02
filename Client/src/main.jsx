import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';
import Tasks from './components/Tasks';

import "./index.css";
// Import our custom CSS
import './scss/styles.scss';


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
  {
    path: "/signup",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/login",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/tasks",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    children: [
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);