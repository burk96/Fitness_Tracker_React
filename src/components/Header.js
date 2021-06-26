import React from "react";
import { Link } from "react-router-dom";

import { logoutUser } from "../api";

import "./Header.css";

const Header = (props) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div id="header">
      <h1>Fitness Tracker</h1>
      <span id="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/routines"}>Routines</Link>
        {token ? <Link to={"/myroutines"}>My Routines</Link> : ""}
        <Link to={"/activities"}>Activities</Link>
        {user ? (
          <a href="/" onClick={logoutUser}>
            {`Logout (${user.username})`}
          </a>
        ) : (
          <Link to={"/loginregister"}>Login / Register</Link>
        )}
      </span>
    </div>
  );
};

export default Header;
