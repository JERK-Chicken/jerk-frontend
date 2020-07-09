import React, {useState} from "react";
import Basket from "./recipe-search/basket";
import RecipeResults from "./recipe-results/recipe-results";
import AddToBasketForm from "./recipe-search/add-to-basket-form";

const Home = () => {
    const [basket, setBasket] = useState([]);
    const [recipes, setRecipes] = useState([]);
    return (
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-6">
                    <AddToBasketForm basket={basket} setBasket={setBasket}/>
                </div>
                <div className="col-6">
                    <RecipeResults recipes={recipes}/>
                </div>        
            </div>
            
            <div className="row">            
                <div className="col-6">
                    <Basket basket={basket} setBasket={setBasket} setRecipes={setRecipes}/>
                </div>
                
            </div>
        </div>
    );
};

export default Home;