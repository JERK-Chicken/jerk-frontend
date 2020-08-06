import React, {useState} from "react";
import GeneralTable from "../general/general-table";
import { withRouter } from "react-router-dom";
import { requestRecipebook } from "../../helpers/requests/recipe-requests";

const RecipeBook = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  
  React.useEffect(() => {
    (async _ => requestRecipebook(setRecipes))();
  },[]);

  const handleBookRecipesClick = (e) => {
    if (selectedId) {
        sessionStorage.setItem('selected-recipe', selectedId);
        props.history.push("/recipe-page");
    }
  }

  const viewRecipeButton = () => {
    const text = "View Recipe";
    return selectedId ? 
      <button type="button" className="btn btn-primary" onClick={handleBookRecipesClick}>{text}</button> :
      <button type="button" className="btn btn-primary" disabled>{text}</button>
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Favorited Recipes</h3>
      </div>
      <div className="card-body">
          <div className ="limit">
            <GeneralTable records={recipes} selectedId={selectedId} setSelectedId={setSelectedId}/>
          </div>
      </div>
      <div className="card-footer">
        <div className="row justify-content-end">
          {viewRecipeButton()}
        </div>
      </div>
    </div>
  );  
};

export default withRouter(RecipeBook);