import { RouteObject } from "react-router-dom";
import OpenPage from "../pages/OpenPage.tsx";
import PatternsPage from "../pages/PatternsPage.tsx";
import CreatorPage from "../pages/CreatorPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <OpenPage />,
  },
  {
    path: "/wzory",
    element: <PatternsPage />,
  },
  {
    path: "/kreator",
    element: <CreatorPage />,
  },
];

export default routes;
