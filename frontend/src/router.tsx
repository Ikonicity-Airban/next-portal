import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CoursePage, HomePage } from "./components";
import { LoginLayout, SignUpLayout } from "./layouts/AuthLayout";
import { StudentLayout } from "./layouts/DashboardLayout";
import SignUpPage from "./pages/signup";
import StudentDashboard from "./pages/student/Dashboard";

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

export default router;
