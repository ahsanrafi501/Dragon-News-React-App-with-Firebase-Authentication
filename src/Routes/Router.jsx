import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CatagoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"), // ✅ fixed
        errorElement: <h2 className="text-center text-red-500">Failed to load news.</h2>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
