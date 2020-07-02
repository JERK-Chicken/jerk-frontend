import React from "react";

const LogoutForm = (props) => {
  return (
    <div class="red-button">
      <button className="btn btn-lg" onClick={props.onClick}>
        Logout
      </button>
    </div>
  );
};

export default LogoutForm;
