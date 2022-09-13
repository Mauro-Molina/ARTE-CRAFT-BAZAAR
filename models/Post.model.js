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
      
    craftsmanName:[{
       // type: mongoose.Schema.Types.ObjectId, ref:"Craftsman",
    }],
    comments:[{
       // type: mongoose.Schema.Types.ObjectId, ref:"Comments",
    }],
  },
  {
        timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;