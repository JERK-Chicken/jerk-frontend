import React, {useState} from "react";
import AddToBasketForm from "./add-to-basket-form";
import Basket from "./basket";

const RecipeSearch = () => {
    // const [selectedCategory, setSelectedCategory] = useState("");
    // const [selectedIngredient, setSelectedIngredient] = useState({id : "", name : ""});
    const [basket, setBasket] = useState([]);

    console.log(basket);

    return (
        <div>
            <h2>This is a RecipeSearch component...</h2>
            <AddToBasketForm basket={basket} setBasket={setBasket}/>
            <Basket basket={basket} setBasket={setBasket}/>
            <button className="btn btn-primary mb-2">Search for recipes</button>
        </div>
    );
};

export default RecipeSearch;