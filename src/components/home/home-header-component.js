import React from "react";
import LoginModal from "../login-logout/login-form-component";
import { Button } from "react-bootstrap";

const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <nav className="navbar navbar-expand-md bg-warning navbar-light card-header">
            <a className="navbar-brand" href="/"><img src="jerklogo.png" alt="logo" width="140" height="50"></img></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
    </Button>
    <LoginModal>
        show={modalShow}
        onHide={() => setModalShow(false)}
        </LoginModal>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
