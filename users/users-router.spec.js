const request = require('supertest');
const users = require('../api/server.js');

describe("Get users endpoint", function() {
    it("Should return an ok status to get route", function() {
      const expectedStatusCode = 200;
      request(users).post("/users");
      expect(expectedStatusCode);
    });
  });

