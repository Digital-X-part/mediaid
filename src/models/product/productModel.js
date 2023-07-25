import { Schema, model, models } from "mongoose";

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

    price: {
      prev: {
        type: Number,
      },
      present: {
        type: Number,
        required: true,
      },
    },

    imagesUrls: [
      {
        type: String,
        required: [true, "Product Image is required"],
      },
    ],

    category: String,
    availableStock: {
      type: Number,
      required: [true, "Stock is required"],
    },

    tags: [String],
    startDate: {
      type: Date,
      default: Date.now,
    },
    highlights: [String],
    endDate: {
      type: Date,
    },
    sellingType: {
      type: String,
      enum: [
        "flash sale",
        "new arrival",
        "feature product",
        "popular product",
        "push product",
      ],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalSales: {
      type: Number,
      default: 0,
    },
    productStatus: {
      type: String,
      enum: ["active", "inactive", "star User"],
      default: "active",
    },
    brandName: String,
    sku: {
      type: String,
      required: [true, "Product SKU is required"],
    },
    // todo change for user id
    /* productAddedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }, */
    productAddedBy: String,
  },
  {
    timestamps: true,
  }
);

const Product = models?.Product || model("Product", ProductsSchema);

export default Product;
