import React from "react";
import GeneralTable from "../general/general-table"
import axios from "axios";


const UserRecipe = (props) => {
  const [recipes, setRecipes] = React.useState([]);
  const token = sessionStorage.getItem("json-token");
  React.useEffect(() => {
    axios
      .get("/users/recipes", {headers :{'x-access-token':`${token}`}})
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[token]);


  return (
  <div>
  <GeneralTable records={recipes} selectedId={props.selectedId} setSelectedId={props.setSelectedId}/>
  </div>
  );  
};

export default UserRecipe;