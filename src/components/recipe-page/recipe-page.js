import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getRecipe(setRecipe, id){
  const res = await axios.get(`/recipes/${id}`)
  setRecipe(res.data);
}

function RecipePage(props) {
  const [currRecipe, setRecipe] = useState({});
  useEffect(()=>{
    (async_ =>{getRecipe(setRecipe, 5)})();
  }, []);

  console.log(currRecipe);
  if(currRecipe.name) return (
    <div className="container">
          <div style={{ marginTop: 20 }}>
            <div className="card">
                <div className="card-header"><h3>View Recipe</h3></div>
                <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        Recipe Name
                      </div>
                      <div className="col-3">
                        Prep Time
                      </div>
                      <div className="col-3">
                        Cook Time
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        {currRecipe.name}
                      </div>
                      <div className="col-3">
                        {currRecipe.prepTime}
                      </div>
                      <div className="col-3">
                        {currRecipe.cookTime}
                      </div>
                    </div>
                    <br/>
                    <div className="row">
                      <div className="col-6">
                        <ul>
                        {currRecipe.ingredients.map((i)=>{
                            return <li>{i.qty} {i.unit.longType} {i.name}</li>
                        })}
                        </ul>
                      </div>
                      <div className="col-6">
                        <ol>
                        {currRecipe.steps.map((s)=>{
                          return <li>{s.instruction}</li>
                        })}
                        </ol>
                      </div>
                    </div>
                </div>
                <div className="row card-footer justify-content-between">
                    <button type="button" className="btn btn-success">Save Recipe</button>
                    <a className="btn btn-danger" href="/" role="button">Return to Basket</a>
                </div>
            </div>
        </div>
    </div>
  )
  else return <div></div>
};

export default RecipePage;