const { Schema, model } = require("mongoose");


const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date:{
        type: date.now,

    },
    description:{
      type: String,
      required: true,
      trim: true,
    },
   
    postNumber:{
      type: Number,

    },
    photos: {
      type: Image,
    },
    craftsmanName:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Craftsman",
    }],
    coments:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Coments",
    }],
  },
  
  {
        timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;