import React from "react";

const RecipeRow = (props) => {

    const handleClick = () => {
        // console.log(props.data.id);
        props.setSelectedRecipe(props.data.id);
    }

    return (
        <tr onClick={handleClick}>
        <td>
            {props.data.name}
        </td>
        </tr>
    );
};

export default RecipeRow;