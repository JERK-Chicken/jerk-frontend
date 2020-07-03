import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import Modal from "react-modal";
import LoginForm from "./login-form";

export default function LoginModal(props) {
    const [login, setLogin] = useState({});

    const submitLogin = (e) => {
        e.preventDefault();
        (async _ => {
            try {
                const loginResult = await axios.post("http://13.59.52.148:8082/login",login);
                sessionStorage.setItem("json-token",loginResult.data.token)
                const decoded = jwt.decode(loginResult.data.token);
            
                if(decoded.roles === 'admin'){
                    props.history.push('/admin')
            } else{
                if(decoded.roles === 'user'){
                    props.history.push('/user')
                }
            }
            } catch (error) {
                console.error(error);
            }
        })()};

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setLogin({ ...login, [inputField]: inputValue });
        console.log('Input', inputValue);
        console.log('Field', inputField);
    }  

    return (
    <Modal className="modal modal-dialog modal-dialog-centered" 
            role="dialog" 
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
                <LoginForm onSubmit={submitLogin} onChange={handleChange}>
                    button 
                    
                </LoginForm>
            </div>
        </div>
    </Modal>
    );
}