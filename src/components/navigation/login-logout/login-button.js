import React, {useState} from "react";
import LoginModal from "./login-modal";

function LoginButton() { 
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <div>
      <div className="red-button">
      <button className="btn btn-lg text-white" onClick={() => setmodalIsOpen(true)}>
        Login
      </button>
      </div>
      <LoginModal modalIsOpen={modalIsOpen} setModalIsOpen={setmodalIsOpen}/>
    </div>   
  );
}


export default LoginButton;

