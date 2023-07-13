import { Avatar, Dropdown, Navbar, Sidebar } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LogoComponent from "../components/LogoComponent";
import "../App.css";
import { useEffect, useState } from "react";
import { BreadcrumbComponents } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBookOpen,
  faBoxArchive,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

const studentSideLinks = [
  { name: "Dashboard", link: "dashboard", icon: faDashboard },
  { name: "Courses", link: "my-courses", icon: faBookOpen },
  { name: "Assignment", link: "assignment", icon: faBoxArchive },
  { name: "Result", link: "result", icon: faArrowTrendUp },
];
export const StudentLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function resize(e: UIEvent) {
      setWidth(e.view?.innerWidth || window.innerWidth);
      window.innerWidth > 640 && setToggle(false);
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

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
            <span className="font-robo text-sm logo-clipped p-0 pl-4 whitespace-nowrap text-primary sm:text-lg font-extrabold overflow-hidden">
              Computronix
            </span>
          </Link>
        </Navbar.Brand>
        <div className="p-2 md:pr-4">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                rounded
                bordered
                placeholderInitials="GE"
                status="online"
              />
            }
          >
            <Link to="my-profile">
              <Dropdown.Item>
                <div className="px-4">Profile</div>
              </Dropdown.Item>
            </Link>
            <Dropdown.Item href="/login">
              <div className="px-4">Logout</div>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
      {/* main section */}
      <Sidebar
        id="logo-sidebar"
        aria-label="Sidebar" /* className="h-screen fixed shadow-lg" */
        className="float-left fixed -mt-1 left-0 z-40 mobile:w-3/5 sm:w-64  transition-transform h-screen border-r border-gray-300 dark:border-gray-800"
        style={{
          transform:
            toggle || width > 639 ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <Sidebar.ItemGroup>
          {studentSideLinks.map(({ name, icon, link }) => (
            <div className="p-2 mt-10" key={name}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `${isActive ? "text-primary" : "text-gray-500"}`
                }
                onClick={() => setToggle(false)}
              >
                <Sidebar.Item className="text-xs sm:text-sm">
                  <FontAwesomeIcon icon={icon} className="mr-4" />
                  {name}
                </Sidebar.Item>
              </NavLink>
            </div>
          ))}
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
