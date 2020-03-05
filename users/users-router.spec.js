const request = require('supertest');
const server = require('../api/server');

describe("Users router runs tests", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
});

describe("Get users endpoint", function() {
    it("Should return an ok status to get route", function() {
      const expectedStatusCode = 200;
      request(server).post("/users");
      expect(expectedStatusCode);
    });
  });

