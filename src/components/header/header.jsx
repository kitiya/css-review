import React from "react";
import { NavLink } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          {"<KTY/>"}
        </a>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink className="nav-link" to="/responsive-layouts">
              Challenges
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
