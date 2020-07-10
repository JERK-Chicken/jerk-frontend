import React, { useState } from "react";
import Modal from "react-modal";
import RegisterForm from "./register-form";
// import axios from "axios";

const RegisterModal = (props) => { 
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setCredentials({ ...credentials, [inputField]: inputValue });
  }

  const closeModals = () => {
    props.setModalIsOpen(false);
    props.setLoginIsOpen(false);
  }
  
  return (
    <div>
      <Modal 
        className="modal modal-dialog modal-dialog-centered" 
        role="dialog"
        ariaHideApp={false}
        isOpen={props.modalIsOpen}  
        onRequestClose={closeModals} 
      >  
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register!</h5>
            <button type="button" onClick={closeModals} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <RegisterForm credentials={credentials} closeModals={closeModals} onChange={handleChange}/>
          </div>
        </div>
      </Modal>
    </div>   
  );
};

export default RegisterModal;