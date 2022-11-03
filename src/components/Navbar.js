import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiFileText } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="navContainer">
      <div>
        <h1 className="nadpis">Cocktails</h1>
      </div>

      <div className="menu">
        <FiMenu className="menu-icon" onClick={showSidebar} />
        <div className={sidebar ? "lists list-show" : "lists"}>
          <Link to="/" className="link">
            <FaHome /> Home
          </Link>
          <Link to="/About" className="link">
            <FiFileText /> About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
