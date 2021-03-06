import React from "react";

const BasketRow = (props) => {

    const removeIngredient = () => {
        props.setBasket(
            props.basket.filter((obj) => obj.id !== props.ingredient.id)
        );
    }

    return (
        <tr className="interactive-row" onClick={removeIngredient}>
            <td>{props.ingredient.name}</td>
        </tr>
    );
};

export default BasketRow;

