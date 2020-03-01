const router = require("express").Router();

const Recipes = require("../recipes/recipe-model");

// for endpoints beginning with /api/recipes
router.get('/', (req, res) => {
    //returns all recipes
});

router.get('/user/:id', (req, res) => {
    //returns all recipes for the user by their id
});

router.get('/:id', (req, res) => {
    //returns recipe by recipe id
});

router.get(':id/ingredients', (req, res) => {
    //returns a list of ingredients for a given recipe by id
    Recipes.findIngredients(req.params)
        .then(ingredients => {
            ingredients
            ? res.status(200).json(ingredients)
            : res.status(404).json({ error: "no ingredients found for that recipe" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot get ingredients for that recipe at this time" })
        })
});

router.post('/user/:id', (req, res) => {
    //adds a new recipe to the users recipe list by id
});

router.put('/:id', (req, res) => {
    //edits a recipe by recipe id
});

router.delete('/:id', (req, res) => {
    //deletes a recipe by id
});


module.exports = router;
