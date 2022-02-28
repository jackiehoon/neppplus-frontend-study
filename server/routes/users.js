var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/1", function (req, res, next) {
  res.send("1입니다");
});
module.exports = router;
