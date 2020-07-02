import React, { useState } from "react";
import LoginButton from "./login-button";
import isLoggedIn from "../../helpers/logged-in-check"

const Header = () => {
    // const [loggedIn, setLoggedIn] = useState(isLoggedIn());
    const [loggedIn, ] = useState(isLoggedIn());

    let loggingButton = loggedIn ? "" : <LoginButton/>;
    
    return (
    <div id="nav">
        <nav className="navbar navbar-expand-md bg-warning fixed-top">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {loggingButton}
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Header;
