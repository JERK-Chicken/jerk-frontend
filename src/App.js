import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/not-found/not-found-component';
import Home from './components/home/home-component';
import UserApp from './components/user/User';
import AdminApp from './components/admin/Admin';
import Header from './components/navigation/home-header-component';
import NewRecipe from './components/new-recipe/new-recipe-component';
import RecipePage from './components/recipe-page/recipe-page';
import Register from './components/navigation/login-logout/register/register-modal';
import DevUser from './components/admin/dev-user';
import DevRecipe from './components/admin/dev-recipe';
import DevIngredient from './components/admin/dev-ingredient';
import EditRecipe from './components/edit-recipe/edit-recipe-form';

axios.defaults.baseURL = 'http://52.15.59.57:8083';
// axios.defaults.withCredentials = true;

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/admin" component={AdminApp} />
					<Route exact path="/user" component={UserApp} />
					<Route exact path="/new-recipe" component={NewRecipe} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/recipe-page" component={RecipePage} />
					<Route exact path="/dev-user" component={DevUser} />
					<Route exact path="/dev-recipe" component={DevRecipe} />
					<Route exact path="/dev-ingredient" component={DevIngredient} />
					<Route exact path="/edit-recipe" component={EditRecipe} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
