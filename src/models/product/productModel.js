
import { Schema, model,  models } from "mongoose";

export const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is required"],
    },
    description: {
      type: String,
      required: [true, "Product Description is required"],
    },
    highlights: [String],
    price: {
      prev: {
        type: Number,
      },
      present: {
        type: Number,
        required: true,
      },
    },
    images: [
      {
        type: String,
        required: [true, "Product Image is required"],
      },
    ],
    categories: [
      {
        type: [String],
        required: [true, "Category is required"],
      },
    ],
    availableStock: {
      type: Number,
      required: [true, "Stock is required"],
    },
    tags: [String],
    startDate: {
      type: Date,
      default: Date.now,
    },
    sellingType: {
      type: String,
      enum: [
        "flash sale",
        "new arrivable",
        "feature product",
        "popular product",
        "push product",
      ],
    },
    totalSales: {
      type: Number,
      default: 0,
    },
    productStatus:{
      type: String,
      enum: ["active", "inactive",'star User'],
      default: "active",
    },
    brand: String,
    productAddedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = models?.Product || model("Product", ProductsSchema);

export default Product;
