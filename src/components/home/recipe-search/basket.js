import React from "react";

const Basket = (props) => {
    function tableBody() {
        return props.basket.map((ingredient) => 
            <tr><td>{ingredient.name}</td></tr>
        );
    }

    
    return (
        <div>
            <h3>This is a Basket component...</h3>
            <table className="table table-hover table-dark">
                <tbody>
                    {tableBody()}
                </tbody>
            </table>
        </div>
    );
};

export default Basket;