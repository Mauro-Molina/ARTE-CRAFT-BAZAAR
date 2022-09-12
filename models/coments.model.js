const { Schema, model } = require("mongoose");


const comentsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    date:{
        type: date.now,

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

const Coments = model("Coments", comentsSchema);

module.exports = Coments;