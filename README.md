# JERK Chicken Application

### Introduction:

JERK chicken is designed to be a client-friendly open-source environment for 
searching, saving, editing, and sharing recipes. The single page application 
(SPA) is written  using a combination of react, redux, bootstrap, and CSS, and
consists of four main pages:

1. A front page, featuring searching functionality
2. The user dashboard
3. A detailed recipe view
4. A recipe creation page

### Roles and Responsibilities:

The group consisting of James Bell, Logan Gantner, Eric Last, and Robert 
Comstock III were presented with the task of creating a web app using the 
technologies that we have learned up to this point. After brainstorming, we 
sought to develop an app that allows the user to locate recipes based on the
contents of their fridge. This would prevent the user of repeated seraches 
when they realize that the recipe they found requires ingredients that they
don't possess. Beyond the search ability, we also wanted to allow user the 
ability to save recipes that they have previously enjoyed:

After deciding on a project idea, we immediately sorted ourselves into the roles
we would be best at to create the best product possible. The roles are as follows
- Logan Gantner: Team Lead. Conducted daily standups, delegated responsibilities, and was a liaison between back and front end
- Eric Last: Back End Lead. Head of backend development, oversaw implementation of backend functionality and endpoints 
- Robert Comstock III: Front End Lead. In charge of page desing and layout, testing, and functionality
- James Bell: Set up databases and assisted build of functionality and endpoints

### Working as a Team:

To outline our project we used Trello to lay out story points and develop burndown chart. 
We made sure to have consistent communication by having daily standups to make sure everyone 
was properly up to date on their schedule and any problems they may have been accounting.
To work on the project we broke into two teams to tackle both the front and back end with some 
members assisting either team when necessary. We were able to work seemlessly by maintining 
necessary documentation and communication throughout the project. 

### Non-User:

Our vision for our webpage was to be client friendly. We wanted to allow anyone the 
ability to use our application, but limit certain functionality to users and admin. 
As an individual who is not logged into our app, you are still able to access 
recipes from the database based on the ingredients you entered. If you want to save 
a recipe that you enjoyed, then you would have to register an account which would then 
allow you access to more functionality. 

### User:

Beyond the ability to save a recipe, a user also has the ability to create new 
recipes, manage their existing recipes, and delete recipes that they no longer 
want representing them. The user has the ability to perform all of these functions 
on their Dashboard. On the dashboard, the user is also able to view their own 
information, their saved recipes, and all of the recipes they have created. Once 
the user has accomplished all of their desired tasks, they can log out and go about 
their merry way!

## The Navigation Bar:

The top navigation bar acts as the hub for the application, persisting statically
across all major pages. The bar offers the following functionality:
- Redirect to front page
- Logging in, loggin out, and registering a new account
- Directing to the user dashboard (logged-in users only)

### Authentication

Authentication is performed through the use of JSON web token (JWT) exchanges.
The token is first generated at login/registration and is then persisted 
securely in session storage. Logging and registration are performed through a
pair of modal components, with the registration modal accessed through the 
login modal.

TODO:
- [ ] Add a dropdown of dev-specific tools

## The Front/Search Page (`/`)

The front page showcases the core JERK application feature: inclusive and 
exclusive filtered search of the recipe archive by contained ingredients. It 
is important here to make a distinction between ingredients and descriptions:
Ingredients are a baseline description for a specific food (for example, chicken
breast or eggs). An ingredient may have one or more specifying descriptions that
describe preparation or modifications (chicken breast may be chopped or seasoned,
eggs may be raw or hard-boiled). The ingredient is used for searching recipes,
while the description is meant for display purposes on the detailed recipe page.

To use the search feature, the following actions are performed: A (potentially
unlogged) user may add ingredients to their basket, narrowing their search 
through an optional type field to help find what they are looking for. From there,
the may search based on two types of queries:
- When performing a "containing these ingredients" search, the user is asking for all recipes that include *at least* the ingredients listed.
- When performing a "only these ingredients" search, the user is asking for all recipes that contain *no more than* the ingredients listed.

In so doing, the user may find recipes that will use unusual or nearly expired
ingredients, and may also opt to include all the ingredients in their fridge
to see what can be made for dinner at the present time. Finally, from the results
the user can click and redirect to a view of the recipe's specifics.

The search functionality consists of the following major components:

- `RecipeSearch`, where ingredient filtering and selection occurs
    - `AddToBasketForm`
    - `Basket`
- `RecipeResults`, where recipe results are displayed and selected

TODO:
- [ ] Create a preview view, where a user can click on a recipe and see basic information (and a picture?) before navigating to a detailed view
- [ ] Add functionality where a search can be limited to a user's saved/favorite recipes

## The User Dashboard (`/user`)

For logged in users, the dashboard provides three information centers: Basic
user information, favorited recipes, and recipes created by the user.

### Basic Info (`UserInfo`):

This simple space currently only houses the user's supported roles (user, admin, etc).
In the future more information, such as credibility, may be stored here.

TODO:
- [ ] Consider adding a credibility feature, where users earn credibility based on positive actions that increase their privileges on the application

### Favorited Recipes (`RecipeBook`):

A user has the option of add recipes to their saved recipe book from the detailed
description page. From this list, the user may easily navigate to the detailed
page for easy access.

TODO:
- [ ] Add a feature to remove recipes from the favorites list

### Created Recipes (`UserRecipe`):

When a user creates their own recipe, it gets added to this list. These recipes
can be edited or deleted by the user from the archive. In addition, the user may
navigate from here to a page for creating new recipes to add to the archive.

TODO:
- [ ] Plug in feature to edit existing recipe


## The Detailed Recipe Page (`/recipe-page`)

This largely static page includes all the information necessary to recreate the
recipe yourself:
- The recipe name
- Prep and cook times
- A list of igredients/descriptions, with quantities and units
- A list of preparation instructions

In addition to these static features, the user may select a dynamic button to save
the recipe to their recipe book, or link back to the recipe search page. In order
to determine which recipe is displayed, a recipe id is stored in the session
storage. This allows separate pages/views to communicate which recipe should be
rendered, and also persists the information on refreshes.

Major components:
- `RecipePage`
    - `GetRecipe`

TODO:
- [ ] Fix bug: save recipe should be disabled when already saved but sometimes is not
- [ ] Add an option to rate recipes, and display the average across all users
- [ ] Display an image of the recipe at the top
- [ ] Display the author of the recipe at the top
- [ ] Allow making and display comments 

## The New Recipe Page (`/new-recipe`)

Logged in users have the ability to assemble and publish their own recipes,
selecting from a list of server-supported ingrients and units, with a 
customized set of instructions. The page includes two dynamically constructed
tables with rows that may be deleted at any time. Options include the category
and ingredients, which progressively filter related dropdowns to ease the search 
task. Fields are validated before submission is allowed, barring empty fields 
and rows.

Major components:
- `NewRecipeForm`
- Various input components, including the complex `IngredientsInput` and `InstructionsInput` dynamic tables.

TODO:
- [ ] Fix bug: the category applies to the wrong row many times
- [ ] Add a new modal option that allows the user to register new ingredients




