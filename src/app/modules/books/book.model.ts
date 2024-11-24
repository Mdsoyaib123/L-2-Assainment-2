import { Schema, model } from "mongoose";
import { TBook, TOrder } from "./book.interface";

const booksSchema = new Schema<TBook>({
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
      values: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
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
  isStock: {
    type: Boolean
  },
});

const ordersSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    product: {
      type: String,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// create a model
export const BookModel = model<TBook>("books", booksSchema);
export const OrderModel = model<TOrder>("orders", ordersSchema);
