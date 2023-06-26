import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import "./index.css";
import "./index.scss";
import axios from "axios";

// Config baseURL for axios
// axios.defaults.baseURL = `http://admin.cnc-animalhealth.com`;

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ToastContainer
      pauseOnHover={false}
      position={"top-right"}
      draggable={true}
      autoClose={3000}
    />
  </QueryClientProvider>
);
