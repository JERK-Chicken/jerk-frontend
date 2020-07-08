import React from "react";
import RegisterModal from "./register-modal";

export default function LoginModal(props) {
    const handleClick = (e) => {
        e.preventDefault();
        // props.setLoginisOpen(false);
        props.setRegistrationIsOpen(true);
    }

    return (
        <div>
            <div className="red-button">
                <button className="btn btn-lg float-right" onClick={handleClick}>
                    Register
                </button>
            </div>
            <RegisterModal 
                setLoginIsOpen={props.setLoginisOpen} 
                modalIsOpen={props.registrationIsOpen} 
                setModalIsOpen={props.setRegistrationIsOpen}
            />
        </div>
    );
}