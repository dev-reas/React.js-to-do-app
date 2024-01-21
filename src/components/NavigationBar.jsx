import "../App.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/`} exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/about`} activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={`/contact`} activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={`/blog`} activeClassName="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
