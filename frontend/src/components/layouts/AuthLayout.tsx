import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Navbar } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";

export function LoginLayout() {
  return (
    <main className="flex flex-col place-content-center space-y-5">
      <div className="flex ring-1 p-2 h-10 rounded-md items-center justify-evenly text-xs">
        <NavLink
          to="student"
          className={({ isActive, isPending }) =>
            `text-center duration-100 transition-all ${
              isActive ? "text-2xl" : ""
            }`
          }
        >
          Student
        </NavLink>
        <NavLink
          to="instructor"
          className={({ isActive, isPending }) =>
            `text-center ${isActive ? "text-2xl" : ""}`
          }
        >
          Teacher
        </NavLink>
      </div>
      <Outlet />
      <Card>
        <h5 className="text-center space-y-4">Don't have an account?</h5>
        <div className="text-gray-600 dark:text-gray-400 flex mx-auto space-x-2">
          <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
          <Link to="/auth/create-account/student" className="logo-clipped">
            Sign up now
          </Link>
        </div>
      </Card>
    </main>
  );
}
export function SignUpLayout() {
  return (
    <main className="flex flex-col place-content-center space-y-5">
      <Outlet />
      <Card>
        <h5 className="text-center space-y-4">Already have an account?</h5>
        <div className="text-gray-500 dark:text-gray-400 flex mx-auto space-x-2">
          <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
          <Link to="/auth/login/student" className="logo-clipped">
            Login
          </Link>
        </div>
      </Card>
    </main>
  );
}
