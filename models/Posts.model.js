const { Schema, model } = require("mongoose");
//Model Post

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    author:{
      type: Schema.Types.ObjectId, ref:"User",
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
      default:
        "https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600380/59162629-icono-de-perfil-blanco-en-el-bot%C3%B3n-negro-aislado-en-blanco.jpg?ver=6",
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