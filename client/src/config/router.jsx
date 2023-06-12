import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/layout/CommonLayout";
import Auth from "../pages/auth/Auth";
import ProductListing from "../pages/product/pages/ProductListing";
import AddProduct from "../pages/product/pages/AddProduct";
import ProductDetail from "../pages/product/pages/ProductDetail";
import NewsList from "../pages/news/NewsList";
import AddNews from "../pages/news/AddNews";
import NewsDetail from "../pages/news/NewsDetail";
import Login from "../pages/auth/Login";
import AuthLayout from "../components/layout/AuthLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <CommonLayout />,
        // errorElement: <Error />,
        children: [
          {
            path: "/",
            // element: <Dashboard />,
            element: <AddNews />,
          },
          {
            path: "/products/list",
            element: <ProductListing />,
          },
          {
            path: "/products/new",
            element: <AddProduct />,
          },
          {
            path: "/product/:productId",
            element: <ProductDetail />,
          },
          {
            path: "/news/list",
            element: <NewsList />,
          },
          {
            path: "/news/add-news",
            element: <AddNews />,
          },
          {
            path: "/news/:postID",
            element: <NewsDetail />,
          },
        ],
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
      },
      // {
      //   path: "/signup",
      //   element: <SignUpPage />,
      // },
    ],
  },
]);
