const router = require("express").Router();
const mongoose = require("mongoose");
const Post = require("../models/Post.model");

router.get("/event", (req, res) => {
    //if(req.session.post.type === "event"){
        Post.find() 
        .then((event) => {
          res.render("event/event", {event: event});
        });
   //}
  });

module.exports = router;