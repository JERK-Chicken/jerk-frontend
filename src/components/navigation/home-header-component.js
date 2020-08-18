import React from "react";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import LoginButton from "./login-logout/login/login-button";
import LogoutButton from "./login-logout/logout-button";
import UserButton from "../user/user-button";
import NewIngredientButton from "../new-ingredient/new-ingredient-button";
import CreditsButton from "./credits/credits-button"
import { Row } from "reactstrap";
//import AdminButton from "../admin/admin-button";


const Header = (props) => {
    let loggingButton = props.isLoggedIn ? 
        <div className="row justify-content-around">
            <div> <CreditsButton/></div><div> <UserButton/></div><div className="red-button"><LogoutButton/></div>
            </div> : 
            <Row><CreditsButton/><LoginButton/></Row>;
    return (
    <div id="nav">
        <nav className="navbar navbar-expand-md bg-warning">
            <Link className="navbar-brand" to="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></Link>
            <ul className="navbar-nav ml-auto grid-gutter-width: 30px">  
                <li className="nav-item">
                </li>              
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
