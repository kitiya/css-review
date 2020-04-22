import React from "react";
import { NavLink } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <NavLink className="navbar-brand" to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            alt=""
          />
        </NavLink>
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
