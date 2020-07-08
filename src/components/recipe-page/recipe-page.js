import React from 'react';

function RecipePage() {

  return (
    <div className="container">
          <div style={{ marginTop: 20 }}>
            <div className="card">
                <div className="card-header"><h3>View Recipe</h3></div>
                <div className="card-body">
                    <p>Hello Clarice</p>
                </div>
                <div className="row card-footer justify-content-between">
                    <button type="button" className="btn btn-success">Save Recipe</button>
                    <a className="btn btn-danger" href="/" role="button">Return to Basket</a>
                </div>
            </div>
        </div>
    </div>
  )
};

export default RecipePage;