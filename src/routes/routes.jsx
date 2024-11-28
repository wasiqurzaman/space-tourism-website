import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
    ],
  },
]);

export default router;
