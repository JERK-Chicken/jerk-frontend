import React from "react";
import FormInput from "../general/form-input-component";

const NewRecipeForm = (props) => {
    return (
    <div id = "New-Recipe">   
        <form class="form-horizontal" action="/action_page.php">
        <FormInput name="recipe_name" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="prep_time" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="cook_time" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="ingredients" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="steps" type="text" onChange={props.onChange}></FormInput>
        <button type="submit" class="btn btn-warning">Submit</button>
        </form>
    </div>
    );
};

export default NewRecipeForm;