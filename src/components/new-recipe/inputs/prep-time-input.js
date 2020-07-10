import React from "react"

const PrepTimeInput = () => {
    return (
        <div className="form-group ">
            <label className="required">Prep Time</label>
            <input type="number" name="prepTime" id="prepTime" className="form-control"></input>
        </div>
    )
}

export default PrepTimeInput;