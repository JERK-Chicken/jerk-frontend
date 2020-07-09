import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import LoginButton from "./login-logout/login/login-button";
import LogoutButton from "./login-logout/logout-button";
import UserButton from "../user/user-button";
//import AdminButton from "../admin/admin-button";


const Header = (props) => {
    let loggingButton = props.isLoggedIn ? 
        <div className="row justify-content-around">
            <UserButton/><LogoutButton/>
            </div> : 
            <LoginButton/>;
    return (
    <div id="nav">
        <nav className="navbar navbar-expand-md bg-warning">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto grid-gutter-width: 30px">                
                <li className="nav-item">
                    {loggingButton}
                </li>

                {/* <li className="nav-item dropdown">
                    <AdminButton/>
                </li>                */}
            </ul>
        </nav>
    </div>
    );
};

function mapStateToProps(store) {
    return {
        isLoggedIn : store.isLoggedIn,
    };
}

export default connect(mapStateToProps)(withRouter(Header));
