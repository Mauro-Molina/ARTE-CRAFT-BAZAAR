const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      unique: true,
      trim: true,
      match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.']
    },
    role: {
      type: String,
      enum: ["user", "craftsman"],
      default: "user",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
