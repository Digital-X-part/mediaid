import { Schema, Types, model, models } from "mongoose";

const addressSchema = new Schema({
  district: { type: String, required: true },
  area: { type: String, required: true },
  location: { type: String, required: true },
  addressType: { type: String, required: true },
  number: { type: Number, required: true },
});

const productSchema = new Schema({
  productId: { type: Types.ObjectId, required: true },
  name: { type: String, required: true },
  skuId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new Schema(
  {
    orderNumber: { type: Number, unique: true, required: true },
    transactionId: { type: String, unique: true, required: true },
    customerId: { type: Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    orderTime: { type: String, default: Date.now },
    shipTo: [addressSchema],
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    orderItems: [productSchema],
  },
  { versionKey: false }
);

const Order = models?.Order || model("Order", orderSchema);

export default Order;
