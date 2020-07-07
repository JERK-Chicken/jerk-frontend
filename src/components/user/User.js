import React from 'react';

function UserApp() {

  return (
      <div className="content">
              <div className="row" style={{ marginTop: 20 }}>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-8">
                      <div className="card">
                          <div className="card-header text-center">Add a New Recipe</div>
                          <div className="card-body">
                              <div className="row">
                                  <div className="col-sm-4">
                                      <div className="form-group ">
                                          <label className="required">Recipe Name</label>
                                          <input type="text"  name="date" id="date" className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="form-group ">
                                          <label className="required">Prep Time</label>
                                          <input type="int"  id="PrepTime" className="form-control"></input>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="form-group ">
                                          <label className="required">Cook Time</label>
                                          <input type="int"  id="cookTime" className="form-control"></input>
                                      </div>
                                  </div>
                              </div>                                
                              <table className="table">
                                  
                              </table>
                              <table className="table">
                                  
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
  )
}

export default UserApp;