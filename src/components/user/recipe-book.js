import React from "react";
import GeneralTable from "../general/general-table"
import { requestRecipebook } from "../../helpers/requests/recipe-requests";

const RecipeBook = (props) => {
  const [recipes, setRecipes] = React.useState([]);
  
  React.useEffect(() => {
    (async _ => requestRecipebook(setRecipes))();
  },[]);


  return (
  <div>
    <GeneralTable records={recipes} selectedId={props.selectedId} setSelectedId={props.setSelectedId}/>
  </div>
  );  
};

export default RecipeBook;