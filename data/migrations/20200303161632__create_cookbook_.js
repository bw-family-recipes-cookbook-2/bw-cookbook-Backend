exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
      tbl.string('email', 255).notNullable();
    })
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('source', 255).notNullable();
        tbl.string('category', 255).notNullable();
        tbl.text('instructions');
        tbl.text('ingredients')
        tbl.integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema    
      .dropTableIfExists('users')
      .dropTableIfExists('recipes')
  };
  