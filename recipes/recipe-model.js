const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
    addIngredient,
    findIngredients,
    update,
    remove
};

function add(recipe) {
    return db("recipes")
        .insert(recipe)
        .then(ids => {
            return findById(ids[0])
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

function addIngredient(ingredient, id) {
    const addedIng = {...ingredient, recipe_id: id}
    return db("recipes")
        .insert(addedIng)
        .then(() => {
            return findIngredients(id)
        })
};

function findIngredients(id) {
    return db("ingredients_by_recipe as i")
        .join("recipes as r", "r.id", "i.recipe_id")
        .select(
            "r.ingredients",
            "i.quantity"
            )
        .where({ id })
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