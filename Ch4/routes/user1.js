var express = require("express");
const User1 = require("../schemas/user1");
var router = express.Router();

router.get("/list", async (req, res, next) => {
  const users = await User1.find(); // select * from user1과 동일

  console.log(users);

  res.render("user1/list", { users });
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

router.get("/modify", async (req, res) => {
  const id = req.query._id;

  const user = await User1.findById(id);
  console.log(user);

  res.render("user1/modify", { user });
});

router.post("/modify", async (req, res) => {
  const { _id, uid, name, hp, age } = req.body; // js 구조 할당

  await User1.findByIdAndUpdate(_id, { name, hp, age });

  res.redirect("/user1/list");
});

router.get("/delete", async (req, res) => {
  const id = req.query._id;

  await User1.findByIdAndDelete(id);

  res.redirect("/user1/list");
});

module.exports = router;
