import React, {useState} from "react";
import NewIngredientModal from "./new-ingredient-modal";

function NewIngredientButton() { 
  const [newIngIsOpen, setNewIngIsOpen] = useState(false);

  return (
    <div>
      <div className="red-button">
        <button className="btn btn-sm text-white" onClick={() => setNewIngIsOpen(true)}>
          Create New Ingredient
        </button>
      </div>
      <NewIngredientModal 
        newIngIsOpen={newIngIsOpen} 
        setNewIngIsOpen={setNewIngIsOpen}
      />
    </div>   
  );
}


export default NewIngredientButton;

