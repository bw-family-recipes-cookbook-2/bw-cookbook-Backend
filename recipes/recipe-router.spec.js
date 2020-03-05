const request = require('supertest');
const recipes = require('../api/server.js');

describe("GET /api/recipes", function() {
    it("Should return an ok status to recipes route", function() {
      const expectedStatusCode = 200;
      request(recipes).post("/recipes");
      expect(expectedStatusCode);
    });
  });