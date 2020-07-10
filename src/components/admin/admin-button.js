import React from "react";


function AdminButton() { 

  return (
    
      <div>
      <a className="nav-link dropdown-toggle btn-lg text-white" href="/admin" id="navbardrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dev Tools
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/dev-recipe">Recipe</a>
        <a className="dropdown-item" href="/dev-ingredient">Ingredient</a>
        <a className="dropdown-item" href="/dev-user">User</a>
      </div>
      </div>
       
  );
}


export default AdminButton;