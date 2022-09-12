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
    date:{
        type: date.now,
    },
    hour: {
        type: hour.now,
    },
    place:{
        type: String,
    },
    post:{
      type: String,
      trim: true,
      minLength: 6,

    },
    photos: {
      type: Image,
    },
    craftsmanName:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Craftsman",
    }],
    coments:{
        type: String,
        trim: true,
        required: true,
    },

  },
  {
        timestamps: true,
  }
);

const Event = model("Event", EventSchema);

module.exports = Event;
