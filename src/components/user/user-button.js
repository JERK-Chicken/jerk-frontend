import React from "react";
import {Link} from 'react-router-dom';


function UserButton() { 

  return (
    <div>
      <div className="red-button">
      <Link className="btn text-white btn-lg" to="/user" role="button">Dashboard</Link>
      </div>
    </div>   
  );
}


export default UserButton;