exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "test",
      password: "test",
      email: "test@email.com"
    },
    {
      id: 2,
      username: "test-2",
      password: "test",
      email: "test2@email.com"
    },
    {
      id: 3,
      username: "test-3",
      password: "test",
      email: "test3@email.com"
    }
  ]);
};
