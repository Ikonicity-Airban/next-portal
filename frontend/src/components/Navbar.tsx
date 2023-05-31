import { Button, Navbar } from "flowbite-react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import LogoComponent from "./LogoComponent";

/* type Props = {}; */

export default function NavbarComponent(/* {}: Props */) {
  const activeLink: NavLinkProps["className"] = ({ isActive, isPending }) =>
    `px-2 py-1 mx-auto md:mx-0 font-bold order-1 ${
      isPending
        ? "text-gray-700"
        : isActive
        ? "border-primary md:border-b-2 text-primary"
        : ""
    }`;

  return (
    <Navbar
      fluid
      rounded
      className="z-[999] bg-[#fff5] backdrop-blur-lg sticky top-0 w-full"
    >
      <Navbar.Brand className="flex-[1.9]">
        <div className="md:hidden px-2">
          <Navbar.Toggle />
        </div>
        <LogoComponent />
        <Link to="/">
          <span className="logo-clipped p-0 pl-4 whitespace-nowrap text-primary text-lg font-extrabold">
            Computronix
          </span>
        </Link>
      </Navbar.Brand>
      <div className=" hidden md:order-1 sm:mx-0 mobile:flex tablet:justify-end tablet:flex-[2]">
        <Button
          className="px-4 bg-primary shadow-md text-white"
          gradientDuoTone={"greenToBlue"}
        >
          <Link to="/login" className="hover:text-white">
            Login
          </Link>
        </Button>
      </div>
      <Navbar.Collapse className="">
        <div className="order-2 mx-auto mobile:hidden">
          <Button
            className="px-4 bg-primary shadow-md text-white"
            gradientDuoTone={"greenToBlue"}
          >
            <Link to="/login" className="hover:text-white">
              Login
            </Link>
          </Button>
        </div>
        <NavLink to="/" title="Home" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/courses" title="Home" className={activeLink}>
          Courses
        </NavLink>
        <NavLink to="/about" title="Home" className={activeLink}>
          About
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
