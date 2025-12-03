import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./css/index.css";
import Root from "./routes/Root.jsx";
import KleurherhalingSpel from "./components/KleurenSpel/KleurherhalingSpel";
import ReactietijdSpel from "./components/KleurenSpel/ReactietijdSpel";
import StartScherm from "./components/General/StartScherm";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/startscherm" replace />,
      },
      {
        path: "/startscherm",
        element: <StartScherm />,
      },
      {
        path: "/kleurherhaling",
        element: <KleurherhalingSpel />,
      },
      {
        path: "/reactietijd",
        element: <ReactietijdSpel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
