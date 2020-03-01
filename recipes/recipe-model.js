const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
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