exports.seed = function(knex) {
  return knex("ingredients").insert([
    {
      id: 1,
      name: "green chiles"
    },
    {
      id: 2,
      name: "cilantro"
    },
    {
      id: 3,
      name: "diced onion"
    },
    {
      id: 4,
      name: "garlic"
    },
    {
      id: 5,
      name: "lime juice"
    },
    {
      id: 6,
      name: "Tomatoes"
    },
    {
      id: 7,
      name: "Chicken"
    },
    {
      id: 8,
      name: "Teriyaki sauce"
    },
    {
      id: 9,
      name: "canned mix fruit"
    },
    {
      id: 10,
      name: "whipped cream"
    },
    {
      id: 11,
      name: "Marshmallows"
    },
    {
      id: 12,
      name: "nuts"
    }
  ]);
};
