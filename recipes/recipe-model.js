const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
    addIngredient,
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
            return addedRecipe
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
        .select(
            "r.id",
            "r.name",
            "r.source",
            "r.category",
            "r.instructions"
        )
        .where("r.user_id",  id )
        .orderBy("r.id")
};


function findIngredients(id) {
    return db("recipe_ingredients as i")
        .join("recipes as r", "r.id", "i.recipe_id")
        .select(
            "r.name",
            "i.recipe_id",
            "i.quantity"
            )
        .where( id )
};

function addIngredient(ingredient, id) {
    return db("recipe_ingredients as r")
        .insert(ingredient, "r.recipe_id", id)
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