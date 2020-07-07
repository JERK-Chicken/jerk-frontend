import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar-expand-md fixed-bottom">
    <div className="text-center">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/legal" className="nav-link">
            Legal
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            User
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  );
};

export default Footer;