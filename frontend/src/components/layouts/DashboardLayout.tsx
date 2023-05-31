import { Avatar, Breadcrumb, Dropdown, Navbar, Sidebar } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";
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
      className="h-screen mx-auto w-[97vw]"
      // onClick={() => setToggle(false)}
    >
      {/* header */}

      <Navbar fluid rounded className="sticky top-0 w-full z-50">
        <Navbar.Brand className="flex-[1.9]">
          <div className="tablet:hidden px-2">
            <Navbar.Toggle onClick={() => setToggle(!toggle)} />
          </div>
          <LogoComponent />
          <Link to="/">
            <span className="logo-clipped p-0 pl-4 whitespace-nowrap text-primary text-lg font-extrabold">
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
          <Dropdown.Item>
            <Link to="my-profile">
              <div className="px-4">Profile</div>
            </Link>{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="px-4">Logout</div>
          </Dropdown.Item>
        </Dropdown>
      </Navbar>
      <Sidebar
        id="logo-sidebar"
        aria-label="Sidebar" /* className="h-screen fixed shadow-lg" */
        className="fixed top-0 left-0 z-40 w-64 transition-transform h-screen mt-16 border-r border-gray-300 dark:border-gray-800"
        style={{
          transform:
            toggle || width > 640 ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup className="space-y-4">
            <Sidebar.Item>
              <NavLink to="dashboard">Dashboard</NavLink>
            </Sidebar.Item>
            <Sidebar.Item>
              <NavLink to="course/my-courses">Courses</NavLink>
            </Sidebar.Item>
            <Sidebar.Item>
              <NavLink to="assignment">Assignment</NavLink>
            </Sidebar.Item>
            <Sidebar.Item>
              <NavLink to="result">Result</NavLink>
            </Sidebar.Item>
            <Sidebar.Item>
              <NavLink to="/login">logout</NavLink>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <main className="min-h-screen w-full  p-4 relative dark:bg-gray-900">
        {toggle && (
          <div
            className="inset-0 absolute bg-[#1129]"
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
