exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users.string("username", 128).notNullable();
      users.string("password").notNullable();
      users.string("email", 128);
    })
    .createTable("recipes", recipes => {
      recipes.increments();
      recipes.string("name", 225).notNullable();
      recipes.string("source", 225);
      recipes.string("category", 225);
      recipes.text("instructions");
      recipes
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", ingredientes => {
      ingredientes.increments();
      ingredientes.string("name").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl.string("quantity");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.shema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
