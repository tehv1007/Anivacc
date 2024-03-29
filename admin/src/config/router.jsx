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
import Dashboard from "../pages/dashboard/Dashboard";
import InquiryList from "../pages/inquiry/InquiryList";
import InquiryDetail from "../pages/inquiry/InquiryDetail";
import Solutions from "../pages/solutions/Solutions";
import AddSolution from "../pages/solutions/AddSolution";
import SolutionDetail from "../pages/solutions/SolutionDetail";
import Ads from "../pages/ads/Ads";
import EditProduct from "../pages/product/pages/EditProduct";
import EditNews from "../pages/news/EditNews";
import EditSolution from "../pages/solutions/EditSolution";

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
            element: <Dashboard />,
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
            path: "/product/:productId/edit",
            element: <EditProduct />,
          },
          {
            path: "/product/:productId",
            element: <ProductDetail />,
          },
          {
            path: "/posts",
            element: <NewsList />,
          },
          {
            path: "/posts/add-news",
            element: <AddNews />,
          },
          {
            path: "/posts/:postID",
            element: <NewsDetail />,
          },
          {
            path: "/posts/:postID/edit",
            element: <EditNews />,
          },
          {
            path: "/solutions",
            element: <Solutions />,
          },
          {
            path: "/solutions/new",
            element: <AddSolution />,
          },
          {
            path: "/solutions/:solutionID",
            element: <SolutionDetail />,
          },
          {
            path: "/solutions/:solutionID/edit",
            element: <EditSolution />,
          },
          {
            path: "/inquiry",
            element: <InquiryList />,
          },
          {
            path: "/inquiry/:inquiryId",
            element: <InquiryDetail />,
          },
          {
            path: "/ads",
            element: <Ads />,
          },
        ],
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
      },
    ],
  },
]);
