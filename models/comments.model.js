const { Schema, model } = require("mongoose");


const commentsSchema = new Schema({
    message: {
      type: String,
       },
    date:{
      type: Date,
       },
    user: {
      type: Schema.Types.ObjectId, ref:"User",
    },
    
  },
  { 
    timestamps: true,
  }
);

const Comments = model("Comments", commentsSchema);

module.exports = Comemnts;