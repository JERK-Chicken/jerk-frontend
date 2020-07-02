import React, { useState } from "react";
import Modal from "react-modal";
import RegisterForm from "./register-form-component";
import axios from "axios";

const Register = (props) => { 
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [users, setRegister] = useState({});
  const submitRegister = (e) => {
      e.preventDefault();
      
      axios
      .post("http://13.59.52.148:8082/register", users)
      .then(() => {
        console.log(`Happy Cooking!: ${users}`);
        props.history.push("/");
    })
        .catch(() => {
        console.error(`Failed Request`);
        });
    };
        const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setRegister({ ...users, [inputField]: inputValue });
    }  
  
  return (
    <div>
      <div class="red-button">
      <button className="btn btn-lg float-right" onClick={() => setModalisOpen(true)} >
        Register
      </button>
      </div>

      <Modal className="modal modal-dialog modal-dialog-centered" role="dialog" isOpen={modalIsOpen}  onRequestClose={() => setModalisOpen(false)} >  
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Register!</h5>
        <button type="button" onClick={() => setModalisOpen(false)} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <RegisterForm>
          button onSubmit={submitRegister}
          onChange={handleChange}
        </RegisterForm>
        </div>
        </div>
      </Modal>
    </div>   
  );
};

export default Register;