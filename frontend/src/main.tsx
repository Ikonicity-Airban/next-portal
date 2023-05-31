import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, CoursePage } from "./components/index.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import SignUpPage from "./components/auth/signup/index.tsx";
import { LoginLayout, SignUpLayout } from "./components/layouts/AuthLayout.tsx";

import * as serviceWorker from "./service-worker.ts";
import { AppProvider } from "./api/context.tsx";
import { StudentLayout } from "./components/layouts/DashboardLayout.tsx";
import StudentDashboard from "./components/student/Dashboard.tsx";

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
    path: "",
    element: <App></App>,
    children: [
      {
        path: "login",
        element: <LoginLayout />,
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
  {
    path: "",
    element: <StudentLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
      {
        path: ":id/my-courses",
        element: <div>All course</div>,
      },
      {
        path: "assignment",
        element: <div>All Assignments</div>,
      },
      {
        path: "assignment/:id",
        element: <div>All Assignments</div>,
      },
      {
        path: "result",
        element: <div>All Assignments</div>,
      },
      {
        path: "my-profile",
        element: <div>All Assignments</div>,
      },
    ],
  },
  {
    path: "/instructor",
    element: <StudentLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "courses",
        element: <div>All course</div>,
      },
      {
        path: "assignments",
        element: <div>All Assignments</div>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);

serviceWorker.register();
