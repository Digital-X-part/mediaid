import { Schema, Types, model, models } from "mongoose";

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

const orderSchema = new Schema({
  orderNumber: { type: Number, unique: true, required: true },
  transactionId: { type: String, unique: true, required: true },
  customerId: { type: Types.ObjectId, required: true },
  orderTime: { type: String, default: Date.now },
  shipTo: [addressSchema],
  status: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Order = models?.Order || model("Order", orderSchema);

export default Order;
