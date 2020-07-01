import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home-component";
import Footer from '../home/footer-component';

function AdminApp() {

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

export default AdminApp;