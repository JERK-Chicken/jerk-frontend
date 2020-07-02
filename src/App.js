import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/navigation/footers/footer-component";
import NotFound from "./components/not-found/not-found-component";
import Home from "./components/home/home-component";
import FAQ from "./components/navigation/footers/faq-component";
import Help from "./components/navigation/footers/help-component";
import Legal from "./components/navigation/footers/legal-component";
import UserApp from './components/user/User';
import AdminApp from './components/admin/Admin';
import Header from './components/navigation/home-header-component';


function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/" exact>
            <Home></Home>
        </Route>
        <Route path="/faq" exact>
          <FAQ></FAQ>
        </Route>
        <Route path="/help" exact>
          <Help></Help>
        </Route>
        <Route path="/legal" exact>
          <Legal></Legal>
        </Route>
        <Route path="/admin" exact>
          <AdminApp></AdminApp>
        </Route>
        <Route path="/user" exact>
          <UserApp></UserApp>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
