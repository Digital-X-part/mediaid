import { Schema, model, models } from "mongoose";
import { addressSchema } from "../order/orderModel";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 255,
    },
    role: {
      type: String,
      default: "user",
    },
    rewardPoints: {
      type: Number,
      default: 0,
    },
    addresses: [addressSchema], // Use an array for multiple addresses
  },
  { versionKey: false }
);

export const User = models?.User || model("User", userSchema);
