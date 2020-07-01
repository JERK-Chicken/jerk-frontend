import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <div id = "logout" >
      
        <Link className="btn-logout" onClick={props.onClick}>
          Login
        </Link>
      
    </div>
  );
};

export default LoginForm;