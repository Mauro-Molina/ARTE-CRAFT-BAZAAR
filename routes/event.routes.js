const router = require("express").Router();
const mongoose = require("mongoose")
const Event = require("../models/Event.model")

//localhost:3000/event
router.get("/event", (req, res) => {
    res.render("event/event");
  });

router.get("/event", (req,res) =>{
  Event.find()
  .then(allTheEvent => res.render(allTheEvent))
  .catch((err) => console.log(err))
})  

router.post("/event/event", (req,res)=> {
   Event.create(req.body)
   .then((newEvent) => res.render(newEvent))
    .catch((err) => console.log(err))
});
 

router.get("/event/:eventId", (req,res) =>{
  Event.findById(req.params.eventId)
  .then((result) => res.render({data: result}))
  .catch((err) => console.log(err))
})

router.post("/:eventId/edit", (req,res) =>{
  Event.findByIdAndUpdate(req.params.eventId, req.body, {new: true})
  .then((result) => res.render({data: result}))
  .catch((err) => console.log(err))
})

router.post("/:eventId/delete", (req,res) =>{
  Event.findByIdAndDelete(req.params.eventId)
  .then((result) => res.render({data: result}))
  .catch((err) => console.log(err))
})
module.exports = router;