import { Schema, model, models } from "mongoose";

const addressSchema = new Schema({
  district: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  addressType: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
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
});

export const User = models?.User || model("User", userSchema);
