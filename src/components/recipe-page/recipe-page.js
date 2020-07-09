import React from "react";
import GetRecipe from "./save-recipe-component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestSaveRecipe } from "../../helpers/requests/recipe-requests";


const RecipePage = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    (async _ => requestSaveRecipe(props.currentRecipe))();
  };

  return (
    <div>
      <GetRecipe
        onSubmit={handleSubmit}
      ></GetRecipe>
      </div>
  );
};

function mapStateToProps(store) {
  return {
    currentRecipe : store.currentRecipe,
  };
}

export default connect(mapStateToProps)(withRouter(RecipePage));