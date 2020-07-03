import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./login-form";

export default function LoginModal(props) {
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        const inputField = e.target.name;
        const inputValue = e.target.value;
        setCredentials({ ...credentials, [inputField]: inputValue });
    }  

    return (
    <Modal className="modal modal-dialog modal-dialog-centered" 
            role="dialog"
            ariaHideApp={false}
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.setModalIsOpen(false)}
    >  
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Login!</h5>
                <button type="button" 
                    onClick={() => props.setModalIsOpen(false)} 
                    className="close" 
                    data-dismiss="modal" 
                    aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <LoginForm credentials={credentials} onChange={handleChange}>
                    button 
                    
                </LoginForm>
            </div>
        </div>
    </Modal>
    );
}