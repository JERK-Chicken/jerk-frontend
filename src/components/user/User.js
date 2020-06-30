import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home-component";
import Footer from '../footer-component';

function UserApp() {

  return (
    <div className="container-fluid">
      <Router>
        <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default UserApp;