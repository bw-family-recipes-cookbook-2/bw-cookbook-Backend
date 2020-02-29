const router = require("express").Router();

const Recipes = require("../recipes/recipe-model");

// for endpoints beffining with /api/recipes
router.get('/', (req, res) => {
    //returns all recipes
});

router.get('/user/:id', (req, res) => {
    //returns all recipes for the user by their id
});

router.get('/:id', (req, res) => {
    //returns recipe by recipe id
});

router.post('/user/:id', (req,res) => {
    //adds a new recipe to the users recipe list by id
});

router.put('/recipe/:id', (req, res) => {
    //edits a recipe by recipe id
});

router.delete('/recipe/:id', (req, res) => {
    //deletes a recipe by id
});
 

module.exports = router;
