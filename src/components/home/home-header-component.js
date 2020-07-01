import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../login-logout/login-form-component";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md bg-warning navbar-light card-header">
            <a className="navbar-brand" href="/"><img src="clearjerklogo.png" alt="logo" width="150" height="60"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <LoginForm></LoginForm>
                </li>
            </ul>
        </nav>
    );
};

export default Header;

{/* <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <ul className="navbar-nav mr-auto">
    </ul>
</div>
<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <LogoutForm></LogoutForm>
        </li>
    </ul>
</div> */}