import React from "react";


function AdminButton() { 

  return (
    <div>
      <div className="red-button">
      <a className="nav-link dropdown-toggle btn-lg text-white" href="/" id="navbardrop" data-toggle="dropdown">
        Dev Tools
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/dev-recipe">Recipe</a>
        <a className="dropdown-item" href="/dev-ingredient">Ingredient</a>
        <a className="dropdown-item" href="/dev-user">User</a>
      </div>
      </div>
    </div>   
  );
}


export default AdminButton;