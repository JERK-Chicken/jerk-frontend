import React, { useState } from "react";
import GetRecipe from "./save-recipe-component";
import axios from "axios";
import { withRouter } from "react-router-dom";


const RecipePage = (props) => {
  const [recipe, setRecipe] = useState({});
  const token = sessionStorage.getItem("json-token");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.136.11.92:8083/users/recipebook",recipe, {headers :{'x-access-token':`${token}`}})
      .then(() => {
        console.log(`success! posted: ${recipe}`);
        props.history.push("/user");
      })
      .catch(() => {
        console.error(`uh oh, failed request`);
      });
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setRecipe({ ...recipe, [inputField]: inputValue });
  };

  return (
    <div>
      <GetRecipe
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></GetRecipe>
      </div>
  );
};

export default withRouter(RecipePage);