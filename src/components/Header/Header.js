import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="#7986cb indigo lighten-2">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo">
          Logo
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
