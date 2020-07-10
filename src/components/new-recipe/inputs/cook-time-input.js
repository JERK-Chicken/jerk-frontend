import React from "react"

const CookTimeInput = () => {
    return (
        <div className="form-group ">
            <label className="required">Cook Time</label>
            <input type="number" name="cookTime" id="cookTime" className="form-control"></input>
        </div>
    )
}

export default CookTimeInput;