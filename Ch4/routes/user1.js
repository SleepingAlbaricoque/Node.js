var express = require("express");
const User1 = require("../schemas/user1");
var router = express.Router();

router.get("/list", function (req, res, next) {
  res.render("user1/list");
});

router.get("/register", function (req, res, next) {
  res.render("user1/register");
});

router.post("/register", async (req, res) => {
  // 비동기방식으로 mongoDB에 insert
  const user = await User1.create({
    uid: req.body.uid,
    name: req.body.name,
    hp: req.body.hp,
    age: req.body.age,
  });

  res.redirect("/user1/list");
});

module.exports = router;
