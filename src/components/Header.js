import React from "react";
import { Link } from "react-router-dom";

import { logoutUser } from "../api";

import "./Header.css";

const Header = (props) => {
  const token = localStorage.getItem("token");

  return (
    <div id="header">
      <h1>Fitness Tracker</h1>
      <span id="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/routines"}>Routines</Link>
        <Link to={"/activities"}>Activities</Link>
        {token ? (
          <a href="/" onClick={logoutUser}>
            Logout
          </a>
        ) : (
          <Link to={"/loginregister"}>Login / Register</Link>
        )}
      </span>
    </div>
  );
};

export default Header;
