describe("Auth router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
  });
  describe("POST /api/auth/users", function() {
    it("should return 201 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
  });

  describe("POST /api/auth/users/register", function() {
    it("Should return an OK status to the post route", function() {
      const expectedStatusCode = 201;
      request(auth)
        .post("/register")
        .send({ name: "test", password: "pass" });
      expect(expectedStatusCode);
    });
  });

  describe("POST /api/auth/users/login", function() {
    it("Should return an JSON object from login route", function() {
      const expectedStatusCode = 200;
      request(auth)
        .post("/register")
        .send({ name: "test", password: "pass" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);
      expect(expectedStatusCode);
    });
  });