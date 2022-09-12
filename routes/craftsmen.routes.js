const router = require("express").Router();
const checkRole = require("../middleware/checkRole.js");

/* GET Dashboard */
router.get("/dashboard", checkRole, (req, res, next) => {
  res.render("craftsmen/index", req.session.user);
});

module.exports = router;