import React, { useState } from "react";
import NewRecipeForm from "./new-recipe-form"
import axios from "axios";
import { withRouter } from "react-router-dom";


const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState({});
  const token = localStorage.getItem("json-token");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.136.11.92:8083/recipes",recipe, {headers :{'x-access-token':`${token}`}})
      .then(() => {
        console.log(`success! posted: ${recipe}`);
        props.history.push("/user/recipe");
      })
      .catch(() => {
        console.error(`Unable to process request`);
      });
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setRecipe({ ...recipe, [inputField]: inputValue });
  };

  return (
    <div>
      <div  className = "form">
      <NewRecipeForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></NewRecipeForm>
      </div>
    </div>
  );
};

export default withRouter(NewRecipe);