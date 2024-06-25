import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import mainRoutes from "./Routes/mainRoutes";
import NotFoundPage from "./Pages/NotFoundPage";

import MapPage from "./Pages/mapPage";
import ContactPg from "./Pages/ContactPg";
import MediaPage from "./Pages/MediaPage";
import LoginPage from "./Pages/loginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: mainRoutes,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/map",
      element: <MapPage />,
    },
    {
      path: "/contact",
      element: <ContactPg />,
    },
    {
      path: "/media",
      element: <MediaPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
