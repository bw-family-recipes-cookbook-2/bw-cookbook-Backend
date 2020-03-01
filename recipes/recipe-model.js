const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
    addIngredient,
    addRecipe,
    findIngredients,
    findRecipeByUserId,
    update,
    remove
};

function add(recipe, id) {
    const addedRecipe = {...recipe, user_id: id}
    return db("recipes")
        .insert(addedRecipe)
        .then(() => {
            return findById(id)
        })
};

function find() {
    return db("recipes")
};

function findById(id) {
    return db("recipes")
        .where({ id })
        .first()
};

function findRecipeByUserId(id) {
    return db("recipes as r")
        .join("users as u", "r.user_id", "u.id")
        .select(
            "r.name",
            "r.source",
            "r.category",
            "r.ingredients",
            "r.instructions"
        )
        .where({ id })
};


function findIngredients(id) {
    return db("recipe_ingredients as i")
        .join("recipes as r", "r.id", "i.recipe_id")
        .select(
            "r.ingredients",
            "i.quantity"
            )
        .where({ id })
};

function addIngredient(ingredient, id) {
    const addedIng = {...ingredient, recipe_id: id}
    return db("ingredients_by_recipe")
        .insert(addedIng)
        .then(() => {
            return findIngredients(id)
        })
};

function update(changes, id) {
    return db("recipes")
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db("recipes")
        .where({ id })
        .del()
};