import React from "react";
import GeneralTable from "../general/general-table"
import { requestWrittenRecipe } from "../../helpers/requests/recipe-requests";


const UserRecipe = (props) => {
  React.useEffect(() => {
    (async _ => requestWrittenRecipe(props.setRecipes))();
  },[]);


  return (
  <div className ="recipe">
    <GeneralTable records={props.recipes} selectedId={props.selectedId} setSelectedId={props.setSelectedId}/>
  </div>
  );  
};

export default UserRecipe;