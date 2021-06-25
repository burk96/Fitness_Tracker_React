import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <div id="header">
      <h1>Fitness Tracker</h1>
      <span id="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/activities"}>Activities</Link>
      </span>
    </div>
  );
};

export default Header;
