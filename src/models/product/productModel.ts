import { ProductType } from "@/types/types";
import { Schema, model, Model, models } from "mongoose";

export const ProductsSchema = new Schema<ProductType , Model<ProductType>>({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      highlights: [String],
      price: {
        prev: {
          type: Number,
        },
        present: {
          type: Number,
          required: true
        }
      },
      images: [{
        type: String,
        required: [true, 'Image is required']
      }],
      categories: [{
        type: [String],
        required: [true, 'Category is required']
      }],
      availableStock: {
        type: Number,
        required: [true, 'Stock is required']
      },
      tags: [String],
      startDate: {
        type: Date,
        default: Date.now
      },
      sellingType: {
        type: [String],
      },
      totalSales: {
        type: Number,
        default: 0
      }
},{
    timestamps: true
});


const  Product = models?.products||model<ProductType>('Product', ProductsSchema)

export default Product;



  