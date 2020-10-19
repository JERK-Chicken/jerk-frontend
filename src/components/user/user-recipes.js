import React, {useState, useEffect} from "react";
import GeneralTable from "../general/general-table"
import { Link, withRouter } from "react-router-dom";
import { requestWrittenRecipe } from "../../helpers/requests/recipe-requests";
import { requestDeleteRecipe } from "../../helpers/requests/recipe-requests";


const UserRecipes = (props) => {
  const [selectedId, setSelectedId] = useState("");
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    (async _ => requestWrittenRecipe(setRecipes))();
  },[]);

  const newRecipeButton = () => {
    return <Link className="btn btn-sm btn-success" to="/new-recipe" role="button">Add New Recipe</Link>;
  }

  const modifyButton = () => {
    const text = "Modify Recipe";
    return selectedId ?
      <a className="btn btn-info btn-sm" href="/edit-recipe" role="button">{text}</a> :
      <button type="button" className="btn btn-info btn-sm" disabled>{text}</button>;
  }

  const deleteButton = () => {
    const text = "Delete Recipe";
    return selectedId ? 
      <button type="button" className="btn btn-danger btn-sm" onClick={deleteRecipe}>{text}</button> :
      <button type="button" className="btn btn-danger btn-sm" disabled>{text}</button>;
  }

  const deleteRecipe = (e) => {
    e.preventDefault();
    if (selectedId) {
        (async _ => requestDeleteRecipe(selectedId))();
        setRecipes(
          recipes.filter(r => r.id !== selectedId)
        );
        setSelectedId("");
    }   
  }

  const handleRecipeClick = (e) => {
    //e.stopPropagation();
    const elemId = e.target.getAttribute("value")
    console.log(elemId)
    sessionStorage.setItem('selected-recipe', elemId);
			props.history.push('/recipe-page');
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Recipes</h3>
      </div>
      <div className="card-body">
        <div className ="recipe">
          <GeneralTable records={recipes} selectedId={selectedId} setSelectedId={setSelectedId} setTextClickHandeler={true} textClickHandeler={handleRecipeClick}/>
        </div>
      </div>
      <div className="row card-footer justify-content-between">
        {newRecipeButton()}
        {modifyButton()}
        {deleteButton()}
      </div>
    </div>

    
  );  
};

export default (withRouter(UserRecipes));