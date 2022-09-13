module.exports = (req, res, next) => {
    //console.log("el role es:", req.session.user.role);
    if (req.session.user.role === "craftsman") {
      next();
    } else {
      res.redirect("/");
    }
  };
  