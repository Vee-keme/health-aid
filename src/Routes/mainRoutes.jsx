import { Home, Hospital } from "../Pages";

const mainRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/hospital",
    element: <Hospital />,
  },
];

export default mainRoutes;
