import React from "react";
import { Link } from "react-router-dom";

const LogoutForm = (props) => {
  return (
    <div id = "logout" >
      
        <Link className="btn-logout" onClick={props.onClick}>
          Logout
        </Link>
      
    </div>
  );
};

export default LogoutForm;