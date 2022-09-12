const { Schema, model } = require("mongoose");


const eventmanSchema = new Schema(
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
      type: mongoose.Schema.Types.ObjectId, ref:"Comments",
  }],
 
    craftsmanName:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Craftsman",
    }],
    

  },
  {
        timestamps: true,
  }
);

const Event = model("Event", EventSchema);

module.exports = Event;
