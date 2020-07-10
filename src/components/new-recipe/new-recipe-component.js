import React from "react";
import NewRecipeForm from "./new-recipe-form"
import { withRouter } from "react-router-dom";

const NewRecipe = (props) => {
  return (
    <div>
      <div className = "form">
      <NewRecipeForm/>
      </div>
    </div>
  );
};

export default withRouter(NewRecipe);