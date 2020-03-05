const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

// for endpoints beginning with api/users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
router.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "User has been deleted" });
      } else {
        res.status(404).json({ message: "User could not be found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error removing the user" });
    });
});
router.put("/:id", (req, res) => {
  const changes = req.body;
  Users.update(req.params.id, changes)
    .then(user => {
      if (user) {
        res.status(200).json(changes);
      } else {
        res.status(404).json({ message: "User could not be found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating the user" });
    });
});

module.exports = router;
