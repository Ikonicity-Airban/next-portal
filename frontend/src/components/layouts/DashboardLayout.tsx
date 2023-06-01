import { Avatar, Dropdown, Navbar, Sidebar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import LogoComponent from "../LogoComponent";
import "../../App.css";
import { useState } from "react";
import { BreadcrumbComponents } from "..";

export const StudentLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [width] = useState(window.innerWidth);
  // const asideRef = useRef(null);

  // const
  return (
    <section
      className="h-screen mx-auto w-[97vw] relative"
      // onClick={() => setToggle(false)}
    >
      {/* header */}

      <Navbar
        fluid
        rounded
        className="fixed -ml-1 top-0 w-full z-50 bg-[#ffffffaa] backdrop-blur-lg"
      >
        <Navbar.Brand className="flex-[1.9]">
          <div className="tablet:hidden px-2">
            <Navbar.Toggle onClick={() => setToggle(!toggle)} />
          </div>
          <LogoComponent />
          <Link to="/">
            <span className="logo-clipped p-0 pl-4 whitespace-nowrap text-primary text-lg font-extrabold overflow-hidden">
              Computronix
            </span>
          </Link>
        </Navbar.Brand>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar rounded bordered placeholderInitials="GE" status="online" />
          }
        >
          <Link to="my-profile">
            <Dropdown.Item>
              <div className="px-4">Profile</div>
            </Dropdown.Item>
          </Link>
          <Dropdown.Item>
            <div className="px-4">Logout</div>
          </Dropdown.Item>
        </Dropdown>
      </Navbar>
      {/* main section */}
      <Sidebar
        id="logo-sidebar"
        aria-label="Sidebar" /* className="h-screen fixed shadow-lg" */
        className="float-left fixed left-0 z-40 w-5/6  transition-transform h-screen border-r border-gray-300 dark:border-gray-800"
        style={{
          transform:
            toggle || width > 640 ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <Sidebar.ItemGroup className="">
          <div className="my-2">
            <Link to="dashboard">
              <Sidebar.Item>Dashboard</Sidebar.Item>
            </Link>
          </div>
          <div className="my-2">
            <Link to="course/my-courses">
              <Sidebar.Item>Courses</Sidebar.Item>
            </Link>
          </div>
          <div className="my-2">
            <Link to="assignment">
              <Sidebar.Item>Assignment</Sidebar.Item>
            </Link>
          </div>
          <div className="my-2">
            <Link to="result">
              <Sidebar.Item>Result</Sidebar.Item>
            </Link>
          </div>
          <div className="my-2">
            <Link to="/login">
              <Sidebar.Item>logout</Sidebar.Item>
            </Link>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar>
      <main className="min-h-screen tablet:ml-64 p-4 relative mt-16 dark:bg-gray-900">
        {toggle && (
          <div
            className="inset-0 absolute bg-[#1129] select-none"
            onClick={() => setToggle(!toggle)}
            onFocus={() => setToggle(!toggle)}
          ></div>
        )}
        <BreadcrumbComponents />
        <Outlet />
      </main>
      {/* </div> */}
    </section>
  );
};

export const InstructorLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const AdminLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
