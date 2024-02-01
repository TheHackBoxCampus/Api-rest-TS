import { Schema, model } from "mongoose";
import { user } from "../interfaces/user.interface";

const userSchema = new Schema<user>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true 
    },
    age: {
      type: Number,
      required: true 
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = model("users", userSchema);
export default userModel;
