import { RouteObject } from "react-router-dom";
import OpenPage from "../pages/OpenPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <OpenPage />,
  },
];

export default routes;
