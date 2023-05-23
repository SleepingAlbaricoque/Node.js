const express = require("express");
const router = express.Router();

router.get("/get1", (req, res) => {
  // 파라미터 수신
  const uid = req.query.uid;

  res.render("sub1/get1", { uid: uid });
});
router.get("/get2", (req, res) => {
  const data = {
    name: req.query.name,
    age: req.query.age,
  };

  res.render("sub1/get2", data);
});

router.get("/post1", (req, res) => {
  res.render("sub1/post1");
});

router.post("/post1Result", (req, res) => {
  const data = {
    uid: req.body.uid,
    pass: req.body.pass,
  };

  res.render("sub1/post1Result", data);
});

router.get("/post2", (req, res) => {
  res.render("sub1/post2");
});

router.post("/post2Result", (req, res) => {
  const data = {
    uid: req.body.uid,
    name: req.body.name,
    hp: req.body.hp,
    age: req.body.age,
  };

  res.render("sub1/post2Result", data);
});

module.exports = router;
