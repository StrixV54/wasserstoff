import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Earning from "./components/earning/Earning.jsx";
import Sales from "./components/sales/Sales.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,   //Dashboard
      },
      {
        path: "/sales",
        element: <Sales />,  //Dashboard with Sales figures
      },
      {
        path: "/earning",
        element: <Earning />, //Earning Board
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
