import React from "react";

const RecipeRow = (props) => {

    let classes = `interactive-row ${props.isActive ? "active-row" : ""}`;

    const handleClick = () => {
        props.setSelectedRecipe(props.data.id);
    }

    return (
        <tr className={classes} onClick={handleClick}>
            <td>{props.data.name}</td>
        </tr>
    );
};

export default RecipeRow;