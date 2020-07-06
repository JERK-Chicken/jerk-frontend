# Ingredient-Related Endpoints

## Ingredient Searching

#### Get All Categories:
Method: GET  
Params: None  
Returns: List of `{ingredientId, ingredientName}`  

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









