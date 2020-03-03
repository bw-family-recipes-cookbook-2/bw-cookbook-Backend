const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
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
            "r.ingredients",
            "r.instructions"
        )
        .where("r.user_id",  id )
        .orderBy("r.id")
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