import React from "react";
import GetRecipe from "./save-recipe-component";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestSaveRecipe } from "../../helpers/requests/recipe-requests";


const RecipePage = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    (async _ => requestSaveRecipe(props.currentRecipe))();
    // console.log(props.currentRecipe);
    // const config = {headers: {
    //   'x-access-token': sessionStorage.getItem("token")
    // }}

    // axios
    //   .post("/users/recipebook", props.currentRecipe, config)
    //   .then(() => {
    //     console.log(`success! posted: ${props.currentRecipe}`);
    //     props.history.push("/user");
    //   })
    //   .catch(() => {
    //     console.error(`uh oh, failed request`);
    //   });
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