const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const recipeRouter = require("../recipes/recipe-router");
const restricted = require("../auth/restricted-middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/recipes", restricted, recipeRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;