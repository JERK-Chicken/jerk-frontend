import React from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found/not-found-component";
import Home from "./components/home/home-component";
import UserApp from './components/user/User';
import AdminApp from './components/admin/Admin';
import Header from './components/navigation/home-header-component';
import NewRecipe from "./components/new-recipe/new-recipe-component";
import RecipePage from './components/recipe-page/recipe-page';
import Register from './components/navigation/login-logout/register/register-modal';
import DevUser from './components/admin/dev-user';
import DevRecipe from './components/admin/dev-recipe';
import DevIngredient from './components/admin/dev-ingredient';
import EditRecipe from './components/edit-recipe/edit-recipe-form';

axios.defaults.baseURL = "http://3.136.11.92:8083";
// axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/" exact>
            <Home></Home>
        </Route>
        <Route path="/admin" exact>
          <AdminApp></AdminApp>
        </Route>
        <Route path="/user" exact>
          <UserApp></UserApp>
        </Route>
        <Route path="/new-recipe" exact>
          <NewRecipe></NewRecipe>
        </Route>
        <Route path="/register" exact>
          <Register></Register>
        </Route>
        <Route path="/recipe-page" exact>
          <RecipePage></RecipePage>
        </Route>
        <Route path="/dev-user" exact>
          <DevUser/>
        </Route>
        <Route path="/dev-recipe" exact>
          <DevRecipe/>
        </Route>
        <Route path="/dev-ingredient" exact>
          <DevIngredient/>
        </Route>
        <Route path="/edit-recipe" exact>
          <EditRecipe/>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
