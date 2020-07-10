import React from "react";
import GetRecipe from "./save-recipe-component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const RecipePage = (props) => {

  return (
    <div>
      <GetRecipe/>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    currentRecipe : store.currentRecipe,
  };
}

export default connect(mapStateToProps)(withRouter(RecipePage));