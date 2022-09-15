const { Schema, model } = require("mongoose");

//user model 
const userSchema = new Schema(
      {
      username: {
        type: String,
        required: true,
        unique: true, 
      },
      email:{
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 6,
        unique: true,
        trim: true,
      },
      role:{
        type: String,
        default:"user",
        enum: ["user","craftsman"]
      },
      profilePic: {
        type: String,
        default:
          "https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600380/59162629-icono-de-perfil-blanco-en-el-bot%C3%B3n-negro-aislado-en-blanco.jpg?ver=6",
      },
      post:[{
        type: Schema.Types.ObjectId, ref:"Post",
      }],
      comments:[{
        type: Schema.Types.ObjectId, ref:"Comments",
      }],
    },
    {
      timestamps: true,
    });


const User = model("User", userSchema);

module.exports = User;
