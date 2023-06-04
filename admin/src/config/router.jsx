import { createBrowserRouter, Link } from "react-router-dom";
import Root from "../modules/common/layouts/Root";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import ProductListing from "../modules/product/pages/ProductListing";
import Orders from "../modules/order/Orders";
import Users from "../modules/user/pages/Users";
import ProductDetail from "../modules/product/pages/ProductDetail";
import AddProduct from "../modules/product/pages/AddProduct";
import EditProduct from "../modules/product/pages/EditProduct";
import Error from "../modules/notFound/NotFound";
import Auth from "../modules/auth/Auth";
import Login from "../modules/auth/Login";
import NewsList from "../modules/news/NewsList";
import AddNews from "../modules/news/AddNews";
import NewsDetail from "../modules/news/NewsDetail";
import EditNews from "../modules/news/EditNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <Root />,
        // errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/products",
            element: <ProductListing />,
          },
          {
            path: "/product/new",
            element: <AddProduct />,
          },
          {
            path: "/products/:productId",
            element: <ProductDetail />,
          },
          {
            path: "/news",
            element: <NewsList />,
          },
          {
            path: "/add-news",
            element: <AddNews />,
          },
          {
            path: "/news/:postID",
            element: <NewsDetail />,
          },
          {
            path: "/products/:productId/edit",
            element: <EditProduct />,
          },
          {
            path: "/products/:productId/edit",
            element: <EditNews />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
