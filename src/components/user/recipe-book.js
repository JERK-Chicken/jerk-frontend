import React from "react";
import GeneralTable from "../general/general-table"
import axios from "axios";


const RecipeBook = () => {
  const [recipes, setRecipes] = React.useState([]);
  const token = sessionStorage.getItem("json-token");
  React.useEffect(() => {
    axios
      .get("http://3.136.11.92:8083/users/recipebook", {headers :{'x-access-token':`${token}`}})
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[token]);


  return (
  <div>
  <GeneralTable records={recipes}></GeneralTable>
  </div>
  );  
};

export default RecipeBook;