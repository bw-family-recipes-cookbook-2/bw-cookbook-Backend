const router = require("express").Router();

const Ingredients = require("../ingredients/ingredients-model");

// for endpoints beginning with /api/ingredients

router.get('/', (req, res) => {
    //returns a list of all ingredients
    Ingredients.find()
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot get ingredients at this time" })
        })
});

router.get('/:id', (req, res) => {
    //returns an ingredient by id
    Ingredients.findById(req.params.id)
        .then(ingredients => {
            ingredients
            ? res.status(200).json(ingredients)
            : res.status(404).json({ error: "no ingredients associated with that id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot get ingredients for that recipe at this time" })
        })
});

router.post('/', (req, res) => {
    //adds a new ingredient to the ingredients table
    Ingredients.add(req.body)
        .then(ingredient => {
            res.status(201).json(ingredient)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot add ingredient at this time" })
        })
})


router.put('/:id', (req, res) => {
    //edits an ingredient by ingredient id 
    const { id } = req.params.id;
    const changes = req.body;

    Ingredients.findById(id)
        .then(ingredient => {
            ingredient
            ? Ingredients.update(changes, id)
                .then(updated => {
                    res.status(200).json(updated)
                })
            : res.status(404).json({ error: "no ingredient with that id found" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot update ingredient at this time" })
        })
});

router.put('/recipe/:id', (req, res) => {
    //edits an ingredient by id for a recipe
    const { id } = req.params.id;
    const changes = req.body;

    Ingredients.findById(id)
        .then(ingredient => {
            ingredient
            ? Ingredients.updateIngredientForRecipe(changes, id)
                .then(changes => {
                    res.status(200).json(changes)
                })
            : res.status(404).json({ error: "ingredient not found" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot update ingredient at this time" })
        })
});

router.delete('/:id', (req, res) => {
    //removes ingredient by id
    const { id } = req.params.id;

    Ingredients.findById(id)
        .then(ingredient => {
            ingredient
            ? Ingredients.remove(id)
                .then(removed => {
                    res.status(200).json(removed)
                })
            : res.status(404).json({ error: "no ingredient with that id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot remove ingredient at this time" })
        })
});

router.delete('/recipe/:id', (req, res) => {
    //removes ingredient by id from recipe by id

    const { id } = req.params.id;

    Ingredients.findById(id)
        .then(ingredient => {
            ingredient
            ? Ingredients.removeIngredientFromRecipe(id)
                .then(removed => {
                    res.status(200).json(removed)
                })
            : res.status(404).json({ error: "no ingredient with that id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "cannot remove ingredient at this time" })
        })
});

module.exports = router;