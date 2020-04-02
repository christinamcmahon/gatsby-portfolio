import React from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import ResponsiveMenu from "./Core";
import NavLink from "./NavLink";
import Menu from "./Menu";
import { Link } from "gatsby";

export default function index() {
  // customize blog link here
  const blogLink = "https://dev.to/christinamcmahon"

  return (
    <ResponsiveMenu
      menuOpenButton={<FaBars size={30} color="#616CAA" />}
      menuCloseButton={<FaWindowClose size={30} color="#616CAA" />}
      changeMenuOn="500px"
      largeMenuClassName="large-menu"
      smallMenuClassName="small-menu"
      menu={
        <Menu>
          <ul>
            <li className="logo">
              <NavLink to="/">CHRISTINA</NavLink>
            </li>
            <li>
              <NavLink to="/projects">See my work</NavLink>
            </li>
            <li>
              <a href={blogLink}>blog</a>
            </li>
          </ul>
        </Menu>
      }
      smallMenuBrand={
        <Link
          to="/"
          style={{
            color: "#000",
            textDecoration: "none",
            fontFamily: "Montserrat, sans-serif"
          }}
        >
          <h2>CHRISTINA</h2>
        </Link>
      }
    />
  );
}
