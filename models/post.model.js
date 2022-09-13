const { Schema, model } = require("mongoose");


const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date:{
        type: Date,
     },
    extract:{
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    image: {
      type: String,
    },
     description:{
      type: String,
      required: true,
      trim: true,
    },
    type:{
      type: String,
      enum: ["post","event"]
    },
    comments:[{
       type: Schema.Types.ObjectId, ref:"Comments",
    }],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;