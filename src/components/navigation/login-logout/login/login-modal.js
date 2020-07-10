import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./login-form";
import RegisterButton from "../register/register-button";
import CloseModalButton from "../close-modal-button";

export default function LoginModal(props) {
    const [credentials, setCredentials] = useState({});

    const handleFormChange = (e) => {
        const inputField = e.target.name;
        const inputValue = e.target.value;
        setCredentials({...credentials, [inputField]: inputValue});
    }  

    return (
    <Modal className="modal modal-dialog modal-dialog-centered" 
            role="dialog"
            ariaHideApp={false}
            isOpen={props.loginIsOpen}
            onRequestClose={() => props.setLoginIsOpen(false)}
    >  
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Login!</h5>
                <CloseModalButton setIsOpen={props.setLoginIsOpen}/>
            </div>
            <div className="modal-body">
                <LoginForm credentials={credentials} onChange={handleFormChange}/>
                <RegisterButton
                    setLoginisOpen = {props.setLoginIsOpen}
                    registrationIsOpen = {props.registrationIsOpen}
                    setRegistrationIsOpen = {props.setRegistrationIsOpen}
                />
            </div>
        </div>
    </Modal>
    );
}