const request = require('supertest');
const server = require('../api/server');

describe("API router runs tests", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
});

describe("GET /api/recipes", function() {
    it("Should return an ok status to recipes route", function() {
      const expectedStatusCode = 200;
      request(server).get("/recipes");
      expect(expectedStatusCode);
    });
  });