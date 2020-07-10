import React from "react";
import {Link} from 'react-router-dom';


function UserButton() { 

  return (
    <div className="red-button">
      <Link className="btn text-white" to="/user" role="button">Dashboard</Link>
      
    </div>   
  );
}


export default UserButton;