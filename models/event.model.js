const { Schema, model} = require("mongoose");


const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description:{
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
    },
      
    comments:[{
      type: Schema.Types.ObjectId, ref:"Comments",
  }],
 
    craftsmanName:{
        type: Schema.Types.ObjectId, ref:"Craftsman",
    },
 
  },
  {
        timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
