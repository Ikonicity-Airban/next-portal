import { Button, Navbar } from "flowbite-react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";

/* type Props = {}; */

export default function NavbarComponent(/* {}: Props */) {
  const activeLink: NavLinkProps["className"] = ({ isActive, isPending }) =>
    `px-2 py-1 font-bold ${
      isPending
        ? "text-gray-700"
        : isActive
        ? "border-primary tablet:border-b-2 text-primary"
        : ""
    }`;

  return (
    <section className=" w-full" style={{}}>
      <Navbar fluid rounded className="main-nav-bar sticky top-0 w-full">
        <Navbar.Brand>
          <div className="md:hidden px-2">
            <Navbar.Toggle />
          </div>
          <img
            alt="Flowbite Logo"
            className="mr-3 h-6 mobile:h-9"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <Link to="/login">
            <span className="self-center whitespace-nowrap text-primary text-lg font-extrabold dark:text-white">
              Computronix
            </span>
          </Link>
        </Navbar.Brand>
        <div className="mobile:order-2 hidden mobile:block">
          <Button
            className="px-4 bg-primary shadow-md"
            gradientDuoTone={"tealToLime"}
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>
        <Navbar.Collapse className="py-1 my-1">
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
    </section>
  );
}
