import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import mainRoutes from "./Routes/mainRoutes";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: mainRoutes,
      errorElement: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
