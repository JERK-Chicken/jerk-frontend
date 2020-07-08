import React, {useState} from "react";
import Basket from "./recipe-search/basket";
import RecipeResults from "./recipe-results/recipe-results";
import AddToBasketForm from "./recipe-search/add-to-basket-form";

const Home = () => {
    const [basket, setBasket] = useState([]);
    console.log(basket);
    return (
        <div className="container-fluid">
            <div className="row justify-content-around">
            <div class="col-5">
            <AddToBasketForm basket={basket} setBasket={setBasket}/>
            </div>
            <div class="col-6"><RecipeResults/></div>        
            </div>
            <div className="row justify-content-around">            
            <div class="col-5">
            <Basket basket={basket} setBasket={setBasket}/>
            </div>
            <div class="col-6">
            
            </div>
            </div>
        </div>
        
    );
};

export default Home;