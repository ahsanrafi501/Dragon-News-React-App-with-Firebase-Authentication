import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CatagoryNews/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import AuthProvider from "../Provider/AuthProvider";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading/Loading";

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
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        errorElement: (
          <h2 className="text-center text-red-500">Failed to load news.</h2>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
        
      
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
