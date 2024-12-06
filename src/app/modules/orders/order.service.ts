import { Response } from "express";
import { ProductModel } from "../products/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// create a order
const createOrder = async (data: TOrder, res: Response) => {
  const id = data.product;
  const isExitProduct = await ProductModel.findOne({ _id: id });

  if (!isExitProduct) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }

  if (isExitProduct.quantity < 0) {
    await ProductModel.updateOne(
      { _id: id },
      {
        $set: {
          inStock: false,
        },
      }
    );
    return res.status(400).json({
      message: "You cannot order the product because quantity is lower than 0",
      success: false,
    });
  }
  if (isExitProduct.quantity < data.quantity) {
    return res.status(400).json({
      message: "Insufficient stock for the requested quantity",
      success: false,
    });
  }

  const decreaseProductQuantity = await ProductModel.updateOne(
    { _id: id },
    {
      $set: {
        quantity: isExitProduct?.quantity - data.quantity,
      },
    }
  );
  if (decreaseProductQuantity) {
    const result = await OrderModel.create(data);
    return result;
  }
};

// calculate Total Revenue
const totalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ["$totalPrice", "$quantity"] } },
      },
    },
    {
      $project: { totalRevenue: 1, _id: 0 },
    },
  ]);

  return result;
};
export const OrderService = {
  createOrder,
  totalRevenue,
};
