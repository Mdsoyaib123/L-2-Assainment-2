import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

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

  
  export const OrderModel = model<TOrder>("orders", ordersSchema);
