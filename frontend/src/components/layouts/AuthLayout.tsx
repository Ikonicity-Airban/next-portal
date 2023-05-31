import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LoginPage from "../auth/login";

export function LoginLayout() {
  return (
    <main className="flex flex-col place-content-center space-y-5">
      <LoginPage />
      <Card>
        <h5 className="text-center space-y-4">Don't have an account?</h5>
        <div className="text-gray-600 dark:text-gray-400 flex mx-auto space-x-2">
          <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
          <Link
            to="/create-account/student"
            preventScrollReset={false}
            className="logo-clipped"
          >
            Sign up now
          </Link>
        </div>
      </Card>
    </main>
  );
}
export function SignUpLayout() {
  return (
    <main className="flex flex-col place-content-center space-y-5 p-10">
      <div className="flex mt-4 rounded-md items-center justify-evenly text-xs">
        <NavLink
          to="student"
          replace
          className={({ isActive }) =>
            `text-center p-2 after:h-1 ${
              isActive ? "text-2xl logo-clipped " : ""
            }`
          }
        >
          Student
        </NavLink>
        <NavLink
          replace
          to="instructor"
          className={({ isActive }) =>
            `text-center transition-[font-size]  duration-300 ${
              isActive ? "text-2xl logo-clipped" : ""
            }`
          }
        >
          Instructor
        </NavLink>
      </div>
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
