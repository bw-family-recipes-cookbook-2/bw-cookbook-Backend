const router = require("express").Router();

const Ingredients = require("../ingredients/ingredients-model");

// for endpoints beginning with /api/ingredients

router.get('/', (req, res) => {
    //returns a list of all ingredients
});

router.get('/:id', (req, res) => {
    //returns an ingredient by id
});

router.get('/recipe/:id', (req, res) => {
    //returns a list of ingredients for a given recipe by id
});

router.post('/recipe/:id', (req, res) => {
    //adds a new ingredient to a recipe by recipe id
})

router.put(':id/recipe/:id', (req, res) => {
    //edits an igredient by id for a recipe by id
});

router.delete(':id/recipe/:id', (req, res) => {
    //removes ingredient by id from recipe by id
});