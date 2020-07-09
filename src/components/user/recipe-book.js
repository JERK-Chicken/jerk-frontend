import React from "react";
import GeneralTable from "../general/general-table"
import axios from "axios";


const RecipeBook = () => {
  const [recipes, setRecipes] = React.useState([]);
  
  React.useEffect(() => {
    const config = {headers: {
      'x-access-token': sessionStorage.getItem("json-token")
    }};
    axios
      .get("http://3.136.11.92:8083/users/recipebook", config)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[]);


  return (
  <div>
  <GeneralTable records={recipes}></GeneralTable>
  </div>
  );  
};

export default RecipeBook;