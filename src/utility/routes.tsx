import { RouteObject } from "react-router-dom";
import OpenPage from "../pages/OpenPage.tsx";
import PatternsPage from "../pages/PatternsPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <OpenPage />,
  },
  {
    path: "/wzory",
    element: <PatternsPage />,
  },
];

export default routes;
