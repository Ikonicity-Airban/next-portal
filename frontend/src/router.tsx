import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CoursePage, HomePage } from "./components";
import { LoginLayout, SignUpLayout } from "./layouts/AuthLayout";
import { StudentLayout } from "./layouts/DashboardLayout";
import SignUpPage from "./pages/signup";
import StudentDashboard from "./pages/student/Dashboard";
import StudentCoursesPage from "./pages/student/courses";
import AssignmentPage from "./pages/student/assignment";
import ResultPage from "./pages/student/result";
import StudentProfilePage from "./pages/student/profile";

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
        path: "my-courses",
        element: <StudentCoursesPage />,
      },
      {
        path: "assignment",
        element: <AssignmentPage />,
      },
      {
        path: "result",
        element: <ResultPage />,
      },
      {
        path: "my-profile",
        element: <StudentProfilePage />,
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
