import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./login-form-component";

const LoginModal = () => { 
  const [modalIsOpen, setModalisOpen] = useState(false);
  return (
    
    <div>
      <div class="red-button">
      <button className="btn btn-lg" onClick={() => setModalisOpen(true)} >
        Login
      </button>
      </div>

      <Modal className="modal modal-dialog modal-dialog-centered" role="dialog" isOpen={modalIsOpen}  onRequestClose={() => setModalisOpen(false)} >  
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Login!</h5>
        <button type="button" onClick={() => setModalisOpen(false)} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <LoginForm></LoginForm>
        </div>
        </div>
      </Modal>
    </div>
        
  );
};

export default LoginModal;

