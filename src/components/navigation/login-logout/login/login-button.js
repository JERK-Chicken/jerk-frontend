import React, {useState} from "react";
import LoginModal from "./login-modal";

function LoginButton() { 
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false);

  return (
    <div>
      <div className="red-button">
        <button className="btn text-white" onClick={() => setLoginIsOpen(true)}>
          Login
        </button>
      </div>
      <LoginModal 
        loginIsOpen={loginIsOpen} 
        setLoginIsOpen={setLoginIsOpen}
        registrationIsOpen={registrationIsOpen} 
        setRegistrationIsOpen={setRegistrationIsOpen}
      />
    </div>   
  );
}


export default LoginButton;

