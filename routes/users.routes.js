const isLoggedIn = require("../middleware/isLoggedIn");
const router = require("express").Router();

/* GET User profile */
router.get("/profile", (req, res, next) => {
  console.log(req.session)
  res.render("users/index", req.session.user);
});

module.exports = router;
