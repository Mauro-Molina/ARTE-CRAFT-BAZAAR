const { Schema, model } = require("mongoose");


const handicraftsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
     
    description:{
      type: String,
      required: true,
      trim: true,
    },
    post:{
      type: String,
      trim: true,
      minLength: 6,
      
    },
    postNumber:{
      type: Number,

    },
    photos: {
      type: Image,
    },
    
  },
  {
        timestamps: true,
  }
);

const Handicrafts = model("Handicrafts", handicraftsSchema);

module.exports = Handicrafts;