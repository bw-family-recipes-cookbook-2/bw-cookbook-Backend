const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
    updateIngredientForRecipe,
    update,
    removeIngredientFromRecipe,
    remove
};

function add(ingredient) {
    return db("ingredients")
        .insert(ingredient)
        .then(ids => {
            return findById(ids[0])
        })
};



function find() {
    return db("ingredients")
};

function findById(id) {
    return db("ingredients")
        .where({ id })
        .first()
};

function updateIngredientForRecipe(changes, id) {
    return db("recipe_ingredients as i")
        .join(
            "ingredients as ing", 
            "i.recipe_id", 
            "ing.recipe_id",
            "i.ingredient_id",
            "ing.id"
            )
        .where(id)
        .update(changes)
};

function update(changes, id) {
    return db("ingredients")
        .where({ id })
        .update(changes)
};

function removeIngredientFromRecipe() {
    return db("recipe_ingredients as i")
    .join(
        "ingredients as ing", 
        "i.recipe_id", 
        "ing.recipe_id",
        "i.ingredient_id",
        "ing.id"
        )
    .where(id)
    .del()
}

function remove(id) {
    return db("ingredients")
        .where({ id })
        .del()
};