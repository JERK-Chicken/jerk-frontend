import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./login-form-component";

const LoginModal = () => { 
  const [modalIsOpen, setModalisOpen] = useState(false);
  return (
    
    <div>
      <button class="btn btn-danger btn-info btn-lg" onClick={() => setModalisOpen(true)} >
        Login
      </button>


      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalisOpen(false)}> 
      <div class="modal-dialog modal-dialog-centered " role="document">
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login!</h5>
        <button type="button" onClick={() => setModalisOpen(false)} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <LoginForm></LoginForm>
        </div>
        </div>
        </div>
      </Modal>
    </div>
    
    
  );
};

export default LoginModal;

