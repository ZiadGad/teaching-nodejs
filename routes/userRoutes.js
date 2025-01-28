const express = require("express");

const router = express.Router();

router.route("/users").get().post();

router
  .route("/users/:id")
  .get((req, res) => {
    const id = req.params.id * 1;
    const newUser = users.find((el) => el.id == id);
    res.json(newUser);
  })
  .patch((req, res) => {
    res.send("Update users");
  })
  .delete((req, res) => {});

module.exports = router;
