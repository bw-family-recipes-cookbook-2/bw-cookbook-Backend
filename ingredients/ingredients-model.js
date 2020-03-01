const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findById,
    update,
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

function update(changes, id) {
    return db("ingredients")
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db("ingredients")
        .where({ id })
        .del()
};