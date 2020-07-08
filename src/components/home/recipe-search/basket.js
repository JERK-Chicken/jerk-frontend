import React from "react";

const Basket = (props) => {
    function tableBody() {
        return props.basket.map((ingredient) => 
            <tr><td>{ingredient.name}</td></tr>
        );
    }

    
    return (
        <div style={{ marginTop: 20 }}>
            <div className="col-4"></div>
            <div className="card">
            <div className="card-header"><h3>Your Basket</h3></div>
            <div className="card-body">
            <table className="table table-hover">
                {tableBody()}                
            </table>
            </div>
            <div className="card-footer">
            <div className="row justify-content-between">
            <div className="form-check-inline">
            <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio"/>Any Recipe            
            </label>
            </div>
            <div className="form-check-inline">
            <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio"/>Only these Ingredients
            </label>
            </div>
            <button className="btn btn-primary mb-2">Search for recipes</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Basket;

