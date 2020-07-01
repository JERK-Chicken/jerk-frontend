import React from "react";
import LoginModal from "../login-logout/login-modal-component";

const Header = () => {
    
    return (
    <div id="nav">
        <nav className="navbar navbar-expand-md bg-warning fixed-top">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <LoginModal></LoginModal>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Header;
