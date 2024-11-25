import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productsSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: [
          "Fiction",
          "Science",
          "SelfDevelopment",
          "Poetry",
          "Religious",
        ],
        message: "{VALUE} is not right",
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);


// create a model
export const ProductModel = model<TProduct>("products", productsSchema);
