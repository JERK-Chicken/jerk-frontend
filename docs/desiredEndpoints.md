# User-Related Endpoints

#### Login:
Method: POST  
Body: A JSON containing `{username, password}`  
Returns: A token containing...
- `userId`
- `username`
- `roles` (a list of the user roles)

#### Register New Account:
Method: POST  
body: A JSON containing `{username, password}`  
Returns: A token containing
- `userId`
- `username`
- `roles` (a list of the user roles)

#### Get All Users (Dev):
Method: GET  
Params: None  
Returns: List of `{id, username}` JSONs

#### Delete User (Dev):
Method: DELETE  
Params: `userId`  
Returns: None

# Ingredient-Related Endpoints

## Ingredient Searching

#### Get All Categories:
Method: GET  
Params: None  
Returns: List of `{id, name}` JSONs

#### Get All Units:
Method: GET  
Params: None  
Returns: List of `{id, shortName, longName}` JSONs

#### Get Ingredients:
Method: GET  
Params: `categoryId` (optional)  
Returns: List of ingredient JSONs containing...
- `id` (for ingredient)
- `name` (for ingredient)
- `categoryId`
- `categoryName`

#### Get Ingredient Descriptions:
Method: GET  
Params: `IngredientId` (required)  
Returns: List of description JSONs containing...
- `id` (for description)
- `description`

## Ingredient Modifying

#### Add New Ingredient:
Method: POST  
Body: An ingredient JSON containing...
- `category`
- `name`
- `description`

Returns: None

#### Delete Ingredient (Dev):
Method: DELETE  
Params: `IngredientId` (required)  
Returns: None

#### Modify Ingredients (plural!) (Dev):
Method: PUT  
Body: A LIST of ingredient JSONs containing...
- `id`
- `category`
- `name`
- `description`

Returns: None

# Recipe-Related Endpoints

## Recipe Searching

#### Get All Recipes:
Method: GET  
Params: None  
Returns: List of basic recipe JSONs containing...
- `id`
- `recipe`

#### Get All Recipes (Dev):
Method: GET  
Params: None  
Returns: List of basic recipe JSONs containing...
- `id`
- `recipe`
- `ownerId`
- `ownerName`

#### Recipes Containing Ingredients:
Description: This should find all recipes that include at least the ingredients 
listed (may have extra ingredients)  
Method: POST  
Body: JSON containing the following:
- `ingredients`: a list of ingrient IDs  

Returns: List of basic recipe JSONs containing...
- `id`
- `recipe`

#### Recipes Limited to Ingredients:
Description: This should find all recipes that include nothing except the 
ingredients listed (may exclude some)  
Method: POST  
Body: JSON containing the following:
- `ingredients`: a list of ingredient IDs  

Returns: List of basic recipe JSONs containing...
- `id`
- `recipe`

#### Get Recipe By ID:
Method: GET  
Params: `recipeId` (required)

Returns: A detailed recipe JSON containing...
- `id`
- `name`
- `cookTime`
- `prepTime`
- `instructions`: A list of strings
- `ingredients`: A list of ingredient JSONs, containing...
    - `quantity`
    - `unit`
    - `category`
    - `ingredient`
    - `description`

#### Get Recipe Book:
(User info deduced from token)  
Method: GET  
Params: None  
Returns: A list of basic recipe JSONs containing...
- `id`
- `name`

#### Get Submitted Recipes:
Method: GET  
Params: `userId`  
Returns: A list of basic recipe JSONs containing...
- `id`
- `name`


## Recipe Storing and Editing

#### Add New Recipe:
Method: POST  
Body: A recipe JSON containing the following:
- `name`
- `cookTime`
- `prepTime`
- `instructions`: A list of strings
- `ingredients`: A list of ingredient JSONs, containing...
    - `quantity`
    - `unit`
    - `category`
    - `ingredient`
    - `description`

Returns: None

#### Modify Existing Recipe:
Method: PUT  
Body: A recipe JSON containing the following:
- `id`
- `name`
- `cookTime`
- `prepTime`
- `instructions`: A list of strings
- `ingredients`: A list of ingredient JSONs, containing...
    - `quantity`
    - `unit`
    - `category`
    - `ingredient`
    - `description`

Returns: None

#### Save To Recipe Book:
Method: POST  
Body: A JSON containing a single `recipeId` field  
Returns: None

#### Delete Recipe (Only mods or recipe owner!):
Method: POST  
Body: A JSON containing a single `recipeId` field  
Returns: None







