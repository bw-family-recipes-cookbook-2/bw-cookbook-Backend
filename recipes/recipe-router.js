const router = require("express").Router();

const Recipes = require("../recipes/recipe-model");

// for endpoints beginning with /api/recipes

router.get('/', (req, res) => {
    //returns all recipes
    Recipes.find()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot get recipes at this time" })
        })
});

router.get('/user/:id', (req, res) => {
    //returns all recipes for the user by their id
    const { id } = req.params;

    Recipes.findRecipeByUserId(id)
        .then(recipe => {
            recipe
            ? res.status(200).json(recipe)
            : res.status(404).json({ error: "that user does not have any recipes" })
        })
        .catch(err => {
            res.status(500).json({ error: "cannot find recipes by that user at this time" })
        })
});

router.get('/:id', (req, res) => {
    //returns recipe by recipe id
    const { id } = req.params;

    Recipes.findById(id)
        .then(recipe => {
            recipe
            ? res.status(200).json(recipe)
            : res.status(404).json({ error: "cannot find recipe with that id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot get recipe at this time" })
        })
});


router.post('/user/:id', (req, res) => {
    //adds a new recipe to the users recipe list by user id
    const newRecipe = req.body;
    const { id } = req.params;

    Recipes.add(newRecipe, id)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ error: "cannot add recipe at this time" })
        })
});



router.put('/:id', (req, res) => {
    //edits a recipe by recipe id
    const { id } = req.params;
    const changes = req.body;

    Recipes.findById(id)
        .then(recipe => {
            recipe
            ? Recipes.update(changes, id)
                .then(changes => {
                    res.status(200).json(changes)
                })
            : res.status(404).json({ error: "no recipe with that id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot edit recipe at this time" })
        })
});

router.delete('/:id', (req, res) => {
    //deletes a recipe by id
    const { id } = req.params;
    Recipes.remove(id)
        .then(deleted => {
            deleted
            ? res.status(200).json(deleted)
            : res.status(404).json({ error: "cannot find recipe with id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot delete recipe" })
        })
});


module.exports = router;
