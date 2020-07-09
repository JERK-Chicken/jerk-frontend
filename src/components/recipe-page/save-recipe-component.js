import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getRecipe(setRecipe, id){
  const res = await axios.get(`/recipes/${id}`)
  setRecipe(res.data);
}

function GetRecipe(props) {
  const [currRecipe, setRecipe] = useState({});
  useEffect(()=>{
    (async_ =>{getRecipe(setRecipe, 4)})();
  }, []);

  console.log(currRecipe);
  if(currRecipe.name) return (
    <div className="container">
          <div style={{ marginTop: 20 }}>
            <div className="card">
                <div className="card-header"><h3>{currRecipe.name}</h3></div>
                <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                      <strong>Prep Time:</strong><br/> {currRecipe.prepTime} min
                      <hr className="style3"></hr>
                      </div>
                      <div className="col-6">
                      <strong>Cook Time:</strong><br/>{currRecipe.cookTime} min
                      <hr className="style3"></hr>
                      </div>
                    </div>                    
                    <div className="row">
                      <div className="col-6">
                      <h5>Ingredients</h5>
                       <ul>
                        {currRecipe.ingredients.map((i)=>{
                            return <li>{i.qty} {i.unit.longType} {i.name}</li>
                        })}
                        </ul>
                      </div>
                      <div className="col-6">
                      <h5>Instructions</h5>
                        <ol>
                        {currRecipe.steps.map((s)=>{
                          return <li>{s.instruction}</li>
                        })}
                        </ol>
                      </div>
                    </div>
                </div>
                <div className="row card-footer justify-content-between">
                <button className="btn btn-success" onClick={props.onSubmit}>
                  Save Recipe
                </button>
                    <a className="btn btn-danger" href="/" role="button">Return to Basket</a>
                </div>
            </div>
        </div>
    </div>
  )
  else return <div></div>
};

export default GetRecipe;
