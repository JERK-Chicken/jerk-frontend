import React from "react";
import Login from "../login-logout/login-component";

const Header = () => {
    
    return (
    <div id="nav">
        <nav className="navbar navbar-expand-md bg-warning fixed-top">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Login></Login>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Header;
