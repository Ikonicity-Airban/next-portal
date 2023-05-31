import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, CoursePage } from "./components/index.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./components/auth/login/index.tsx";
import SignUpPage from "./components/auth/signup/index.tsx";
import { LoginLayout, SignUpLayout } from "./components/layouts/AuthLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
      },
      {
        path: "courses",
        element: <CoursePage></CoursePage>,
      },
      {
        path: "about",
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <App></App>,
    children: [
      {
        path: "login",
        element: <LoginLayout />,
        children: [
          {
            path: "student",
            element: <LoginPage></LoginPage>,
            index: true,
          },
          {
            path: "instructor",
            element: <LoginPage></LoginPage>,
          },
          {
            path: "admin",
            element: <LoginPage></LoginPage>,
          },
        ],
      },
      {
        path: "create-account",
        element: <SignUpLayout />,
        children: [
          {
            path: "student",
            element: <SignUpPage></SignUpPage>,
          },
          {
            path: "instructor",
            element: <SignUpPage></SignUpPage>,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
