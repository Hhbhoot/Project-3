import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      required: true,
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      
    },

    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    profileimage: {
      type: String,
    },
    is_Admin : {
      type : Boolean,
      default : false
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user',userSchema);

export default User ;