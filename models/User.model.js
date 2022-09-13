const { Schema, model } = require("mongoose");

//user model 
const userSchema = new Schema(
      {
      username: {
        type: String,
        unique: true, 
      },
      email:{
        type: String,
        unique: true,
      },
      password: String,
      role:{
        type: String,
        default: "User",
        enum: ["user", "craftsman"]
      },
    },
    
    {
      
      timestamps: true,
    }
  );


const User = model("User", userSchema);

module.exports = User;
