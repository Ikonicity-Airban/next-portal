import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbComponents() {
  const location = useLocation();
  const pathArray = location.pathname.split("/").filter((item) => item != "");
  return (
    <Breadcrumb aria-label={location.pathname.toString()}>
      <Breadcrumb.Item href="/">
        <FontAwesomeIcon icon={faHomeAlt} className="p-4" />
        <p>Home</p>
      </Breadcrumb.Item>
      {pathArray.map((path, i) => (
        <Breadcrumb.Item key={i}>
          <Link to={`/${path}`}>{path}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
