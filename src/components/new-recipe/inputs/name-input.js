import React from "react"

const NameInput = () => {
    return (
        <div className="form-group ">
            <label className="required">Recipe Name</label>
            <input type="text"  name="recipe-name" id="recipe-name" className="form-control" />
        </div>
    )
}

export default NameInput;