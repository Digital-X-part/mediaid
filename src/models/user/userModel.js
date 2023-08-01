import { Schema, model, models } from "mongoose";
import { addressSchema } from "../order/orderModel";

// const addressSchema = new Schema({
//   district: {
//     type: String,
//   },
//   area: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
//   addressType: {
//     type: String,
//   },
//   number: {
//     type: Number,
//   },
// });

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
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

// update for user  schema

const updateSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
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

export const UpdateUser = models?.User || model("User", updateSchema);
