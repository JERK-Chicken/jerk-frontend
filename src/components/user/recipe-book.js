import React from "react";
import GeneralTable from "../general/general-table"
import { requestRecipebook } from "../../helpers/requests/recipe-requests";

const RecipeBook = () => {
  const [recipes, setRecipes] = React.useState([]);
  
  React.useEffect(() => {
    (async _ => requestRecipebook(setRecipes))();
    // const config = {headers: {
    //   'x-access-token': sessionStorage.getItem("json-token")
    // }};
    // axios
    //   .get("http://3.136.11.92:8083/users/recipebook", config)
    //   .then((response) => {
    //     setRecipes(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },[]);


  return (
  <div>
  <GeneralTable records={recipes}></GeneralTable>
  </div>
  );  
};

export default RecipeBook;