import React from "react";
import LoginModal from "../login-logout/login-component";

const Header = () => {
    
    return (
        <nav className="navbar navbar-expand-md bg-warning navbar-light card-header">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <LoginModal></LoginModal>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
