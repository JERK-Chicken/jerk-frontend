import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "../login-logout/login-form-component";
import axios from "axios";
import jwt from "jsonwebtoken";

const Login = (props) => { 
  const [modalIsOpen, setModalisOpen] = useState(false);
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
    <div>
      <div class="red-button">
      <button className="btn btn-lg text-white" onClick={() => setModalisOpen(true)} >
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
        <LoginForm>
          button onSubmit={submitLogin}
          onChange={handleChange}
        </LoginForm>
        </div>
        </div>
      </Modal>
    </div>   
  );
};

export default Login;

