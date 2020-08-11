import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import FormInput from "../general/form-input-component";
import { IngredientSelect } from "./ingredient-select";

const NewIngredientForm = (props) => {
    const submitForm = (e) => {
        e.preventDefault();
        (async _ => {
            try {
                const response = await axios.post("/ingredients", props.ingredientData);
            } 
            catch (error) {
                console.error(error);
                console.error(error.response);
            }
        })()
    };
    return (
        <form className = "input-form">
        <IngredientSelect name="modal-select" onChange={props.onChange}></IngredientSelect>
        <br />
        <FormInput name="ingredient-to-add" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="description-to-add" type="text" onChange={props.onChange}></FormInput>
        <button className="btn btn-primary" onClick={submitForm}>Submit</button>
        </form>
    );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     logIn: (token) => dispatch(logIn(token)),
//     loadUsername: (username) => dispatch(loadUsername(username)),
//     loadUserRoles: (roles) => dispatch(loadUserRoles(roles)),
//   };
// }

export default connect(null, null)(NewIngredientForm);