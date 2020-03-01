exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      id: 1,
      name: "salsa",
      source: "Aunt Beth",
      category: "apetizer",
      instructions: "Blend all ingredients together",
      user_id: 1
    },
    {
      id: 2,
      name: "Teriyaki Chicken",
      source: "Aunt Beth",
      category: "Main dish",
      instructions: "Put teriyaki sauce over chicken, bake for an hour",
      user_id: 1
    },
    {
      id: 3,
      name: "Fruit salad",
      source: "Grandma JR",
      category: "dessert",
      instructions: "Mix all ingredients, add dressing",
      user_id: 2
    },
    {
      id: 4,
      name: "Hummus",
      source: "Aunt Beth",
      category: "Apetizer",
      instructions: "Blend all ingredients together",
      user_id: 2
    }
  ]);
};
